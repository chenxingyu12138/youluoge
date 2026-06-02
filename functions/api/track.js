import { recordVisit, visitorHash, json } from '../_lib/store.js';

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.STATS_KV) {
    return json({ error: '统计服务未配置' }, 503);
  }

  try {
    const body = await request.json();
    const path = String(body.path || '/').slice(0, 200);
    const title = String(body.title || '').slice(0, 100);
    const referrer = String(body.referrer || '').slice(0, 200);
    const visitor = visitorHash(request);

    await recordVisit(env.STATS_KV, { path, title, referrer, visitor });
    return json({ ok: true });
  } catch (err) {
    console.error('track error:', err);
    return json({ error: '记录失败' }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
