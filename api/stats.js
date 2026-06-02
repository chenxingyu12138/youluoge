const { redisPipeline } = require('./redis');

function lastNDays(n) {
  const days = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

function checkAuth(req) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const query = req.query?.key || '';
  return token === password || query === password;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!checkAuth(req)) {
    return res.status(401).json({ error: '密码错误或统计未配置' });
  }

  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return res.status(503).json({
      error: '统计数据库未连接',
      setup: true
    });
  }

  try {
    const days = lastNDays(7);
    const dayKeys = days.map(d => `stats:day:${d}`);
    const uvKeys = days.map(d => `stats:uv:${d}`);

    const pipelineCommands = [
      ['GET', 'stats:total'],
      ...dayKeys.map(k => ['GET', k]),
      ...uvKeys.map(k => ['SCARD', k]),
      ['HGETALL', 'stats:pages'],
      ['LRANGE', 'stats:recent', 0, 49]
    ];

    const results = await redisPipeline(pipelineCommands);
    const total = results[0];
    const dayCounts = results.slice(1, 1 + days.length);
    const uvCounts = results.slice(1 + days.length, 1 + days.length * 2);
    const pagesRaw = results[1 + days.length * 2];
    const recentRaw = results[2 + days.length * 2];

    const daily = days.map((date, i) => ({
      date,
      pv: Number(dayCounts[i]) || 0,
      uv: Number(uvCounts[i]) || 0
    }));

    const pageList = [];
    if (pagesRaw && pagesRaw.length) {
      for (let i = 0; i < pagesRaw.length; i += 2) {
        pageList.push({ path: pagesRaw[i], count: Number(pagesRaw[i + 1]) || 0 });
      }
      pageList.sort((a, b) => b.count - a.count);
    }

    const recent = (recentRaw || [])
      .map(item => {
        try { return JSON.parse(item); } catch { return null; }
      })
      .filter(Boolean);

    return res.status(200).json({
      total: Number(total) || 0,
      today: daily[daily.length - 1],
      daily,
      pages: pageList.slice(0, 20),
      recent,
      updatedAt: new Date().toISOString()
    });
  } catch (err) {
    console.error('stats error:', err);
    return res.status(500).json({ error: '读取失败' });
  }
};
