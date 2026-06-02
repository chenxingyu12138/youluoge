document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const guide = getGuideById(id);

  const heroEl = document.getElementById('guide-hero');
  const sidebarEl = document.getElementById('chapter-nav');
  const contentEl = document.getElementById('guide-content');
  const relatedEl = document.getElementById('related-guides');

  if (!guide) {
    document.title = '攻略未找到 — 游略阁';
    heroEl.innerHTML = `
      <div class="guide-hero-inner">
        <div class="guide-hero-content">
          <h1>攻略未找到</h1>
          <p class="guide-hero-desc">该攻略不存在或已被移除，请返回攻略大全浏览其他内容。</p>
          <a href="guides.html" class="btn btn-primary">返回攻略大全</a>
        </div>
      </div>
    `;
    document.querySelector('.guide-layout')?.classList.add('hidden');
    document.querySelector('.related-guides')?.classList.add('hidden');
    return;
  }

  document.title = `${guide.title} 攻略 — 游略阁`;

  const catLabel = CATEGORY_LABELS[guide.category] || guide.category;
  const hotLabel = guide.hot >= 10000
    ? (guide.hot / 10000).toFixed(1) + '万'
    : guide.hot.toLocaleString();

  const heroBg = guide.cover
    ? `<div class="guide-hero-bg"><img src="${guide.cover}" alt="${guide.title}" referrerpolicy="no-referrer"></div><div class="guide-hero-overlay"></div>`
    : '';

  heroEl.innerHTML = `
    ${heroBg}
    <div class="guide-hero-inner">
      <div class="guide-hero-content">
        <nav class="breadcrumb">
          <a href="index.html">首页</a>
          <span>/</span>
          <a href="guides.html">攻略大全</a>
          <span>/</span>
          <span>${guide.title}</span>
        </nav>
        <h1>${guide.title}</h1>
        <p class="guide-hero-desc">${guide.desc}</p>
        <div class="guide-hero-tags">
          <span class="tag">${catLabel}</span>
          ${guide.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="guide-hero-meta">
          <span>🔥 ${hotLabel} 阅读</span>
          <span>📅 更新于 ${guide.updated}</span>
          <span>📖 ${guide.chapters.length} 个章节</span>
        </div>
      </div>
    </div>
  `;

  sidebarEl.innerHTML = guide.chapters.map((ch, i) =>
    `<a href="#${ch.id}" ${i === 0 ? 'class="active"' : ''}>${ch.title}</a>`
  ).join('');

  contentEl.innerHTML = guide.chapters.map(ch => `
    <section id="${ch.id}">
      <h2>${ch.title}</h2>
      ${ch.content}
    </section>
  `).join('');

  const related = GUIDES
    .filter(g => g.id !== guide.id && g.category === guide.category)
    .slice(0, 3);

  const fallbackRelated = GUIDES
    .filter(g => g.id !== guide.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const relatedList = related.length >= 2 ? related : fallbackRelated;
  relatedEl.innerHTML = relatedList.map(createGuideCard).join('');

  const chapterLinks = sidebarEl.querySelectorAll('a');
  const sections = contentEl.querySelectorAll('section');

  function updateActiveChapter() {
    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) {
        current = section.id;
      }
    });
    chapterLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveChapter);
  updateActiveChapter();
});
