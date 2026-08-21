// Theme management
(function() {
  const storageKey = 'convertsphere-theme';
  const darkModeClass = 'dark-mode';
  
  // Get stored theme or system preference
  function getPreferredTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme
  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.body.classList.toggle(darkModeClass, isDark);
    localStorage.setItem(storageKey, theme);
  }

  // Toggle theme
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    return next;
  }

  // Initialize
  const initial = getPreferredTheme();
  applyTheme(initial);

  // Setup toggle button
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function(e) {
        const newTheme = toggleTheme();
        this.textContent = newTheme === 'dark' ? '☀️' : '🌓';
      });
      
      // Set initial button text
      btn.textContent = initial === 'dark' ? '☀️' : '🌓';
    }
  });

  // Expose theme API
  window.theme = {
    toggle: toggleTheme,
    apply: applyTheme,
    get: () => document.documentElement.getAttribute('data-theme') || 'light'
  };
})();
