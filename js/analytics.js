(function () {
  if (location.protocol === 'file:') return;

  var cfg = window.YOULUOGe_CONFIG || {};
  var path = location.pathname + location.search;

  // 任意静态托管（GitHub Pages 等）：填齐 LA_ID + LA_CK 后走 51.la
  if (cfg.LA_ID && cfg.LA_CK) {
    var s = document.createElement('script');
    s.charset = 'UTF-8';
    s.id = 'LA_COLLECT';
    s.src = 'https://sdk.51.la/js-sdk-pro.min.js';
    s.onload = function () {
      if (window.LA && window.LA.init) {
        window.LA.init({ id: cfg.LA_ID, ck: cfg.LA_CK });
      }
    };
    document.head.appendChild(s);
    return;
  }

  // 仅 Cloudflare / Vercel 有 /api/track；GitHub Pages 无后端则跳过
  var host = location.hostname;
  if (host.endsWith('.github.io') || host.endsWith('.gitee.io')) return;

  fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      path: path || '/',
      title: document.title,
      referrer: document.referrer || ''
    }),
    keepalive: true
  }).catch(function () {});
})();
