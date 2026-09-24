// Main application initialization

document.addEventListener('DOMContentLoaded', function() {
  initUniversalConverter();
  initCategoryGrid();
  initCommonConversions();
  initQuickPills();
  initFeaturedGuides();
  initFAQ();
  initHamburgerMenu();
  initSearchToggle();
});

// Universal converter initialization
function initUniversalConverter() {
  const categorySelect = document.getElementById('uc-category');
  const fromSelect = document.getElementById('uc-from');
  const toSelect = document.getElementById('uc-to');
  const valueInput = document.getElementById('uc-value');
  const resultSpan = document.getElementById('uc-result');
  const resultUnitSpan = document.getElementById('uc-result-unit');
  const swapBtn = document.getElementById('uc-swap');
  const copyBtn = document.getElementById('uc-copy');
  const resetBtn = document.getElementById('uc-reset');
  const convertBtn = document.getElementById('uc-convert');

  if (!categorySelect || !valueInput || !resultSpan) return;

  // Populate categories
  CATEGORY_LIST.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.id;
    option.textContent = `${cat.icon} ${cat.name}`;
    categorySelect.appendChild(option);
  });

  // Load units for selected category
  function loadUnits(category) {
    const units = converter.getUnits(category);
    const unitKeys = Object.keys(units);

    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    unitKeys.forEach(key => {
      const opt1 = document.createElement('option');
      opt1.value = key;
      opt1.textContent = units[key].name;
      fromSelect.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = key;
      opt2.textContent = units[key].name;
      toSelect.appendChild(opt2);
    });

    if (unitKeys.length > 1) {
      fromSelect.value = unitKeys[0];
      toSelect.value = unitKeys[1] || unitKeys[0];
    }
  }

  // Clear result and display dashes
  function clearResult() {
    resultSpan.textContent = '—';
    resultUnitSpan.textContent = '';
  }

  // Perform conversion - ONLY triggered by button click, swap, or unit change
  function performConversion() {
    const category = categorySelect.value;
    const from = fromSelect.value;
    const to = toSelect.value;
    const rawValue = valueInput.value.trim();

    // If user hasn't typed anything yet, show a dash
    if (rawValue === '') {
      clearResult();
      return;
    }

    const value = parseFloat(rawValue);

    // Validate the input
    if (isNaN(value)) {
      resultSpan.textContent = 'Invalid';
      resultUnitSpan.textContent = '';
      return;
    }

    if (!category || !from || !to) {
      clearResult();
      return;
    }

    try {
      const result = converter.convert(category, from, to, value);
      const formatted = converter.formatResult(result, 6);
      resultSpan.textContent = formatted;
      const toUnit = getUnitDisplay(category, to);
      resultUnitSpan.textContent = toUnit;

      // Save to recent conversions
      saveRecentConversion(category, from, to, value, result);
    } catch (e) {
      resultSpan.textContent = 'Error';
      resultUnitSpan.textContent = '';
    }
  }

  // ---------- EVENT LISTENERS ----------

  // Category change → reload units and clear result
  categorySelect.addEventListener('change', function() {
    loadUnits(this.value);
    clearResult();
  });

  // From/To unit change → re-run conversion only if a value is already entered
  fromSelect.addEventListener('change', function() {
    if (valueInput.value.trim() !== '') performConversion();
    else clearResult();
  });

  toSelect.addEventListener('change', function() {
    if (valueInput.value.trim() !== '') performConversion();
    else clearResult();
  });

  // *** MANUAL INPUT ONLY: No auto-convert on typing ***
  // Users must click "Convert" to see the result.
  valueInput.addEventListener('keydown', function(e) {
    // Optional: allow Enter key to trigger conversion
    if (e.key === 'Enter') {
      e.preventDefault();
      performConversion();
    }
  });

  // Convert button
  if (convertBtn) {
    convertBtn.addEventListener('click', performConversion);
  }

  // Swap units → keep the value, re-convert
  swapBtn.addEventListener('click', function() {
    const fromVal = fromSelect.value;
    const toVal = toSelect.value;
    fromSelect.value = toVal;
    toSelect.value = fromVal;
    if (valueInput.value.trim() !== '') performConversion();
    else clearResult();
  });

  // Copy result
  copyBtn.addEventListener('click', function() {
    const result = resultSpan.textContent;
    if (result && result !== '—' && result !== 'Error' && result !== 'Invalid') {
      const fullResult = `${result} ${resultUnitSpan.textContent}`;
      navigator.clipboard.writeText(fullResult).then(() => {
        copyBtn.textContent = '✅';
        setTimeout(() => copyBtn.textContent = '📋', 1500);
      });
    }
  });

  // *** FIXED RESET: clears input, dashes the result, resets units ***
  resetBtn.addEventListener('click', function() {
    // Clear the value input
    valueInput.value = '';
    // Reset to default units for the current category
    loadUnits(categorySelect.value);
    // Clear the displayed result
    clearResult();
    // Focus the input so user can start typing immediately
    valueInput.focus();
  });

  // Expose for quick pills
  window.ucPerformConversion = performConversion;
  window.ucSetValue = function(value) {
    valueInput.value = value;
    performConversion();
  };
  window.ucSetUnits = function(from, to) {
    fromSelect.value = from;
    toSelect.value = to;
  };

  // Load initial state (no auto-convert — result shows "—")
  loadUnits(categorySelect.value);
  clearResult();
}

// -------------------- OTHER INIT FUNCTIONS (unchanged) --------------------

function initCategoryGrid() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;

  CATEGORY_LIST.forEach(cat => {
    const card = document.createElement('a');
    card.href = `converters/${cat.id}-converter.html`;
    card.className = 'cat-card';
    card.innerHTML = `
      <div class="cat-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>Convert ${cat.name.toLowerCase()} units</p>
    `;
    grid.appendChild(card);
  });
}

function initCommonConversions() {
  const grid = document.getElementById('common-grid');
  if (!grid) return;

  const commonPairs = [
    { cat: 'length', from: 'm', to: 'ft', label: '1 Meter = 3.28084 Feet' },
    { cat: 'weight', from: 'kg', to: 'lb', label: '1 Kilogram = 2.20462 Pounds' },
    { cat: 'length', from: 'mi', to: 'km', label: '1 Mile = 1.60934 Kilometers' },
    { cat: 'volume', from: 'l', to: 'gal_us', label: '1 Liter = 0.264172 Gallons' },
    { cat: 'length', from: 'km', to: 'mi', label: '1 Kilometer = 0.621371 Miles' },
    { cat: 'weight', from: 'lb', to: 'kg', label: '1 Pound = 0.453592 Kilograms' },
    { cat: 'length', from: 'in', to: 'cm', label: '1 Inch = 2.54 Centimeters' },
    { cat: 'temperature', from: 'c', to: 'f', label: '0°C = 32°F' }
  ];

  commonPairs.forEach(pair => {
    const item = document.createElement('div');
    item.className = 'common-item';
    try {
      const result = converter.convert(pair.cat, pair.from, pair.to, 1);
      const formatted = converter.formatResult(result, 4);
      item.innerHTML = `
        <span>${pair.label}</span>
        <span class="value">${formatted}</span>
      `;
    } catch (e) {
      item.innerHTML = `<span>${pair.label}</span>`;
    }
    grid.appendChild(item);
  });
}

function initQuickPills() {
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', function() {
      const category = this.dataset.cat;
      const from = this.dataset.from;
      const to = this.dataset.to;

      const catSelect = document.getElementById('uc-category');
      if (catSelect) {
        catSelect.value = category;
        catSelect.dispatchEvent(new Event('change'));

        setTimeout(() => {
          if (window.ucSetUnits) window.ucSetUnits(from, to);
          const valInput = document.getElementById('uc-value');
          if (valInput) valInput.value = '1';
          if (window.ucPerformConversion) window.ucPerformConversion();
        }, 100);
      }
    });
  });
}

function initFeaturedGuides() {
  const container = document.getElementById('featured-guides');
  if (!container) return;

  const featured = BLOG_ARTICLES.slice(0, 3);
  featured.forEach(article => {
    const card = document.createElement('div');
    card.className = 'guide-card';
    card.innerHTML = `
      <h3>${article.image} ${article.title}</h3>
      <p>${article.excerpt}</p>
      <a href="blog/${article.id}.html">Read More →</a>
    `;
    container.appendChild(card);
  });
}

function initFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  const faqs = [
    { q: 'How accurate are the conversions?', a: 'Our conversions use standard international measurement definitions and are accurate to 15 decimal places in most cases.' },
    { q: 'Can I use these tools for engineering calculations?', a: 'While our tools are highly accurate, critical engineering calculations should be verified with professional measurement tools.' },
    { q: 'What is the difference between metric and imperial units?', a: 'Metric units are based on multiples of 10 and are used worldwide, while imperial units are primarily used in the United States.' },
    { q: 'Does the website work on mobile devices?', a: 'Yes, our website is fully responsive and works perfectly on smartphones, tablets, and desktop computers.' },
    { q: 'Are the tools free?', a: 'Yes, all conversion tools on ConvertSphere are completely free to use with no registration required.' },
    { q: 'Do I need to create an account?', a: 'No account is required. You can use all features immediately without any registration.' }
  ];

  faqs.forEach(faq => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <button class="faq-question" aria-expanded="false">${faq.q}</button>
      <div class="faq-answer">${faq.a}</div>
    `;
    container.appendChild(item);
  });

  container.addEventListener('click', function(e) {
    const button = e.target.closest('.faq-question');
    if (!button) return;
    const item = button.closest('.faq-item');
    const isActive = item.classList.contains('active');
    this.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
}

function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', function() {
    const isOpen = navMenu.classList.toggle('open');
    this.setAttribute('aria-expanded', isOpen);
  });
}

function initSearchToggle() {
  const toggle = document.getElementById('search-toggle');
  const search = document.getElementById('global-search');
  if (!toggle || !search) return;

  toggle.addEventListener('click', function() {
    const hidden = search.hidden;
    search.hidden = !hidden;
    if (hidden) document.getElementById('search-input')?.focus();
  });
}

// Recent conversions (localStorage)
function saveRecentConversion(category, from, to, value, result) {
  try {
    const recent = JSON.parse(localStorage.getItem('recentConversions') || '[]');
    recent.unshift({ category, from, to, value, result, timestamp: Date.now() });
    if (recent.length > 20) recent.pop();
    localStorage.setItem('recentConversions', JSON.stringify(recent));
  } catch (e) { /* ignore */ }
}
