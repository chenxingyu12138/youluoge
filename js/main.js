function createGuideCard(guide) {
  const catLabel = CATEGORY_LABELS[guide.category] || guide.category;
  const hotLabel = guide.hot >= 10000
    ? (guide.hot / 10000).toFixed(1) + '万'
    : guide.hot.toLocaleString();
  const coverImg = guide.cover
    ? `<img class="cover-bg" src="${guide.cover}" alt="${guide.title}" loading="lazy" referrerpolicy="no-referrer">`
    : '';
  const coverOverlay = guide.cover ? '<div class="cover-overlay"></div>' : '';

  return `
    <a href="guide.html?id=${guide.id}" class="guide-card">
      <div class="guide-card-cover">
        ${coverImg}
        ${coverOverlay}
        <span class="guide-card-badge">${catLabel}</span>
      </div>
      <div class="guide-card-body">
        <h3>${guide.title}</h3>
        <p>${guide.desc}</p>
        <div class="guide-card-meta">
          <span>🔥 ${hotLabel}</span>
          <span>📅 ${guide.updated}</span>
          <span>📖 ${guide.chapters.length} 章</span>
        </div>
      </div>
    </a>
  `;
}

function createLatestItem(guide) {
  const thumbStyle = guide.cover
    ? `background-image: url('${guide.cover}'); background-size: cover; background-position: center;`
    : '';
  return `
    <a href="guide.html?id=${guide.id}" class="latest-item">
      <div class="latest-thumb" style="${thumbStyle}"></div>
      <div class="latest-info">
        <h4>${guide.title}</h4>
        <p>${guide.desc}</p>
      </div>
      <span class="latest-date">${guide.updated}</span>
    </a>
  `;
}

function initNav() {
  const searchInput = document.getElementById('nav-search');
  const searchBtn = document.getElementById('nav-search-btn');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  function doSearch() {
    const q = searchInput?.value.trim();
    if (q) {
      window.location.href = `guides.html?q=${encodeURIComponent(q)}`;
    }
  }

  searchBtn?.addEventListener('click', doSearch);
  searchInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });

  menuBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });
}

function initHomePage() {
  const featuredEl = document.getElementById('featured-guides');
  const latestEl = document.getElementById('latest-guides');
  if (!featuredEl && !latestEl) return;

  const hotGuides = sortGuides(GUIDES, 'hot').slice(0, 6);
  const latestGuides = sortGuides(GUIDES, 'new').slice(0, 5);

  if (featuredEl) {
    featuredEl.innerHTML = hotGuides.map(createGuideCard).join('');
  }
  if (latestEl) {
    latestEl.innerHTML = latestGuides.map(createLatestItem).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHomePage();
});
