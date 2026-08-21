// Blog search functionality (separate from main search)

function searchBlogArticles(query) {
  const q = query.toLowerCase().trim();
  if (!q) return BLOG_ARTICLES;
  
  return BLOG_ARTICLES.filter(article => {
    return article.title.toLowerCase().includes(q) ||
           article.excerpt.toLowerCase().includes(q) ||
           article.category.toLowerCase().includes(q) ||
           article.tags.some(tag => tag.toLowerCase().includes(q));
  });
}

// Initialize blog search if on blog page
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('blog-search-input');
  const resultsContainer = document.getElementById('blog-search-results');
  const gridContainer = document.getElementById('blog-grid');
  
  if (!searchInput || !resultsContainer || !gridContainer) return;
  
  function renderResults(articles) {
    if (articles.length === 0) {
      resultsContainer.innerHTML = `<p style="text-align:center;color:var(--color-text-secondary);padding:var(--spacing-lg);">No articles found. Try a different search.</p>`;
      gridContainer.innerHTML = '';
      return;
    }
    
    resultsContainer.innerHTML = '';
    gridContainer.innerHTML = articles.map(article => `
      <div class="blog-card">
        <div class="blog-card-image">${article.image}</div>
        <div class="blog-card-content">
          <span class="category">${article.category.replace('-', ' ')}</span>
          <h3><a href="${article.id}.html">${article.title}</a></h3>
          <p class="excerpt">${article.excerpt}</p>
          <div class="meta">
            <span>📖 ${article.readingTime} min read</span>
            <span>${article.date}</span>
          </div>
          <a href="${article.id}.html" style="display:inline-block;margin-top:var(--spacing-sm);color:var(--color-primary);font-weight:600;">Read More →</a>
        </div>
      </div>
    `).join('');
  }
  
  let debounceTimer;
  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const results = searchBlogArticles(this.value);
      renderResults(results);
    }, 200);
  });
});
