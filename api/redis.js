/**
 * Vercel KV / Upstash Redis REST 客户端（零依赖）
 */
async function redisPipeline(commands) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) throw new Error('KV not configured');

  const res = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commands)
  });

  if (!res.ok) throw new Error('Redis request failed');
  const data = await res.json();
  return data.map(item => item.result);
}

async function redisCmd(command, ...args) {
  const [result] = await redisPipeline([[command, ...args]]);
  return result;
}

module.exports = { redisPipeline, redisCmd };
