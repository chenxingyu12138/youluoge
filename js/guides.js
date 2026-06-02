document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const initialCat = params.get('cat') || 'all';
  const initialQuery = params.get('q') || '';

  const filterTabs = document.getElementById('filter-tabs');
  const sortSelect = document.getElementById('sort-select');
  const guideList = document.getElementById('guide-list');
  const resultCount = document.getElementById('result-count');
  const emptyState = document.getElementById('empty-state');
  const pageTitle = document.getElementById('page-title');
  const pageDesc = document.getElementById('page-desc');
  const searchInput = document.getElementById('nav-search');

  if (searchInput && initialQuery) {
    searchInput.value = initialQuery;
  }

  let currentCat = initialCat;
  let currentSort = 'hot';
  let currentQuery = initialQuery;

  if (initialCat !== 'all' && CATEGORY_LABELS[initialCat]) {
    pageTitle.textContent = CATEGORY_LABELS[initialCat] + ' 攻略';
    pageDesc.textContent = `浏览全部 ${CATEGORY_LABELS[initialCat]} 类游戏攻略`;
  }

  function setActiveTab(cat) {
    filterTabs?.querySelectorAll('.filter-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.cat === cat);
    });
  }

  function render() {
    let list = currentQuery
      ? searchGuides(currentQuery)
      : getGuidesByCategory(currentCat);

    if (currentQuery && currentCat !== 'all') {
      list = list.filter(g => g.category === currentCat);
    }

    list = sortGuides(list, currentSort);

    if (resultCount) {
      resultCount.textContent = `共 ${list.length} 篇攻略`;
    }

    if (list.length === 0) {
      guideList.innerHTML = '';
      emptyState?.classList.remove('hidden');
    } else {
      emptyState?.classList.add('hidden');
      guideList.innerHTML = list.map(createGuideCard).join('');
    }
  }

  setActiveTab(currentCat);
  render();

  filterTabs?.addEventListener('click', e => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    currentCat = tab.dataset.cat;
    setActiveTab(currentCat);
    render();
  });

  sortSelect?.addEventListener('change', () => {
    currentSort = sortSelect.value;
    render();
  });

  const searchBtn = document.getElementById('nav-search-btn');
  searchBtn?.addEventListener('click', () => {
    currentQuery = searchInput?.value.trim() || '';
    render();
  });
});
