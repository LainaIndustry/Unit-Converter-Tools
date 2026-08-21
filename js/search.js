// Global search functionality

const SEARCH_INDEX = {
  converters: [
    { id: 'length-converter', title: 'Length Converter', description: 'Convert between millimeters, centimeters, meters, kilometers, inches, feet, and more.', category: 'converter' },
    { id: 'weight-converter', title: 'Weight Converter', description: 'Convert between milligrams, grams, kilograms, ounces, pounds, and tons.', category: 'converter' },
    { id: 'temperature-converter', title: 'Temperature Converter', description: 'Convert between Celsius, Fahrenheit, Kelvin, and Rankine.', category: 'converter' },
    { id: 'volume-converter', title: 'Volume Converter', description: 'Convert between liters, gallons, cups, and other volume units.', category: 'converter' },
    { id: 'area-converter', title: 'Area Converter', description: 'Convert between square meters, square feet, acres, and more.', category: 'converter' },
    { id: 'speed-converter', title: 'Speed Converter', description: 'Convert between km/h, mph, m/s, knots, and Mach.', category: 'converter' },
    { id: 'pressure-converter', title: 'Pressure Converter', description: 'Convert between Pascal, PSI, Bar, and atmosphere.', category: 'converter' },
    { id: 'energy-converter', title: 'Energy Converter', description: 'Convert between Joules, calories, BTU, and watt-hours.', category: 'converter' },
    { id: 'power-converter', title: 'Power Converter', description: 'Convert between Watts, horsepower, and kilowatts.', category: 'converter' },
    { id: 'data-storage-converter', title: 'Data Storage Converter', description: 'Convert between bytes, KB, MB, GB, TB, and binary units.', category: 'converter' },
    { id: 'time-converter', title: 'Time Converter', description: 'Convert between seconds, minutes, hours, days, and more.', category: 'converter' }
  ],
  conversions: [
    { id: 'cm-to-inches', title: 'Centimeters to Inches', description: 'Convert centimeters to inches instantly.', category: 'conversion' },
    { id: 'inches-to-cm', title: 'Inches to Centimeters', description: 'Convert inches to centimeters instantly.', category: 'conversion' },
    { id: 'kg-to-lbs', title: 'Kilograms to Pounds', description: 'Convert kilograms to pounds instantly.', category: 'conversion' },
    { id: 'lbs-to-kg', title: 'Pounds to Kilograms', description: 'Convert pounds to kilograms instantly.', category: 'conversion' },
    { id: 'celsius-to-fahrenheit', title: 'Celsius to Fahrenheit', description: 'Convert Celsius to Fahrenheit instantly.', category: 'conversion' },
    { id: 'fahrenheit-to-celsius', title: 'Fahrenheit to Celsius', description: 'Convert Fahrenheit to Celsius instantly.', category: 'conversion' },
    { id: 'km-to-miles', title: 'Kilometers to Miles', description: 'Convert kilometers to miles instantly.', category: 'conversion' },
    { id: 'miles-to-km', title: 'Miles to Kilometers', description: 'Convert miles to kilometers instantly.', category: 'conversion' }
  ],
  blog: BLOG_ARTICLES.map(article => ({
    id: article.id,
    title: article.title,
    description: article.excerpt,
    category: 'blog',
    tags: article.tags
  }))
};

function searchAll(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results = [];
  const allItems = [
    ...SEARCH_INDEX.converters.map(item => ({ ...item, type: 'converter' })),
    ...SEARCH_INDEX.conversions.map(item => ({ ...item, type: 'conversion' })),
    ...SEARCH_INDEX.blog.map(item => ({ ...item, type: 'blog' }))
  ];

  allItems.forEach(item => {
    const searchable = `${item.title} ${item.description} ${item.tags?.join(' ') || ''}`.toLowerCase();
    if (searchable.includes(q)) {
      results.push(item);
    }
  });

  return results.slice(0, 15);
}

// Search UI
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  if (!searchInput || !resultsContainer) return;

  let debounceTimer;

  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = this.value;
      const results = searchAll(query);
      displaySearchResults(results, query);
    }, 200);
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      this.value = '';
      resultsContainer.innerHTML = '';
      this.blur();
    }
  });

  function displaySearchResults(results, query) {
    if (!query) {
      resultsContainer.innerHTML = '';
      return;
    }

    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-result-item" style="text-align:center;color:var(--color-text-secondary);">
          No results found for "${query}"
        </div>
      `;
      return;
    }

    let html = '';
    results.forEach(item => {
      let link = '#';
      if (item.type === 'converter') {
        link = `converters/${item.id}.html`;
      } else if (item.type === 'conversion') {
        link = `conversions/${item.id}.html`;
      } else if (item.type === 'blog') {
        link = `blog/${item.id}.html`;
      }
      
      const typeLabel = item.type.charAt(0).toUpperCase() + item.type.slice(1);
      html += `
        <a href="${link}" class="search-result-item" style="display:block;padding:var(--spacing-md);border-bottom:1px solid var(--color-border);">
          <strong>${highlightMatch(item.title, query)}</strong>
          <span style="font-size:0.8rem;color:var(--color-text-secondary);margin-left:var(--spacing-sm);background:var(--color-primary);color:#fff;padding:1px 10px;border-radius:50px;">${typeLabel}</span>
          <div style="font-size:0.9rem;color:var(--color-text-secondary);">${item.description}</div>
        </a>
      `;
    });
    resultsContainer.innerHTML = html;
  }

  function highlightMatch(text, query) {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark style="background:var(--color-accent);color:#fff;padding:0 4px;border-radius:2px;">$1</mark>');
  }
});
