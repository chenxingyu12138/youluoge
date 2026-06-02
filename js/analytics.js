(function () {
  if (location.protocol === 'file:') return;

  const path = location.pathname + location.search;
  const payload = {
    path: path || '/',
    title: document.title,
    referrer: document.referrer || ''
  };

  fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(function () {});
})();
