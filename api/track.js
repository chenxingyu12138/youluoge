const crypto = require('crypto');
const { redisPipeline } = require('./redis');

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function visitorHash(req) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || 'unknown';
  const ua = req.headers['user-agent'] || '';
  return crypto.createHash('sha256').update(`${ip}|${ua}`).digest('hex').slice(0, 16);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return res.status(503).json({ error: '统计服务未配置' });
  }

  try {
    const { path = '/', title = '', referrer = '' } = req.body || {};
    const safePath = String(path).slice(0, 200);
    const day = todayKey();
    const visitor = visitorHash(req);
    const now = new Date().toISOString();
    const recentEntry = JSON.stringify({
      path: safePath,
      title: String(title).slice(0, 100),
      referrer: String(referrer).slice(0, 200),
      time: now
    });

    await redisPipeline([
      ['INCR', 'stats:total'],
      ['INCR', `stats:day:${day}`],
      ['HINCRBY', 'stats:pages', safePath, 1],
      ['SADD', `stats:uv:${day}`, visitor],
      ['LPUSH', 'stats:recent', recentEntry],
      ['LTRIM', 'stats:recent', 0, 199]
    ]);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('track error:', err);
    return res.status(500).json({ error: '记录失败' });
  }
};
