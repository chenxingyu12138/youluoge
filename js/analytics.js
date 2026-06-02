(function () {
  if (location.protocol === 'file:') return;

  var cfg = window.YOULUOGe_CONFIG || {};
  var path = location.pathname + location.search;

  // 国内 Gitee Pages：使用 51.la 统计（在 analytics-config.js 填 LA_ID）
  if (cfg.LA_ID) {
    var s = document.createElement('script');
    s.charset = 'UTF-8';
    s.id = 'LA_COLLECT';
    s.src = 'https://sdk.51.la/js-sdk-pro.min.js';
    s.onload = function () {
      if (window.LA && window.LA.init) {
        window.LA.init({ id: cfg.LA_ID, ck: cfg.LA_ID });
      }
    };
    document.head.appendChild(s);
    return;
  }

  // 海外 Cloudflare / Vercel：自建 API 统计
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
