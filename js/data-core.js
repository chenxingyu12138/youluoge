const CATEGORY_LABELS = {
  rpg: 'RPG',
  action: '动作',
  strategy: '策略',
  openworld: '开放世界',
  indie: '独立游戏',
  multiplayer: '多人联机'
};

const STEAM_HERO = (id) =>
  `https://cdn.akamai.steamstatic.com/steam/apps/${id}/library_hero.jpg`;

const STEAM_HEADER = (id) =>
  `https://cdn.akamai.steamstatic.com/steam/apps/${id}/header.jpg`;

function getGuideById(id) {
  return GUIDES.find(g => g.id === id);
}

function getGuidesByCategory(cat) {
  if (!cat || cat === 'all') return [...GUIDES];
  return GUIDES.filter(g => g.category === cat);
}

function sortGuides(list, sortBy) {
  const sorted = [...list];
  switch (sortBy) {
    case 'hot':
      return sorted.sort((a, b) => b.hot - a.hot);
    case 'new':
      return sorted.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    case 'name':
      return sorted.sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
    default:
      return sorted;
  }
}

function searchGuides(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [...GUIDES];
  return GUIDES.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.desc.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q)) ||
    CATEGORY_LABELS[g.category]?.toLowerCase().includes(q)
  );
}

function renderCover(guide, className = 'cover-bg') {
  if (!guide.cover) return '';
  return `<img class="${className}" src="${guide.cover}" alt="${guide.title} 官方宣传图" loading="lazy" referrerpolicy="no-referrer">`;
}
