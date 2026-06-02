import { getStats, checkAuth, json } from '../_lib/store.js';

export async function onRequestGet(context) {
  const { request, env } = context;

  if (!checkAuth(request, env)) {
    return json({ error: '密码错误或统计未配置' }, 401);
  }

  if (!env.STATS_KV) {
    return json({ error: '统计数据库未连接', setup: true }, 503);
  }

  try {
    const data = await getStats(env.STATS_KV);
    return json(data);
  } catch (err) {
    console.error('stats error:', err);
    return json({ error: '读取失败' }, 500);
  }
}
