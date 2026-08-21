// Utility functions

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function formatNumber(num, decimals = 6) {
  if (!isFinite(num)) return '∞';
  if (isNaN(num)) return 'Invalid';
  return parseFloat(num.toPrecision(decimals)).toString();
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function setQueryParam(param, value) {
  const url = new URL(window.location);
  url.searchParams.set(param, value);
  window.history.pushState({}, '', url);
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  return Promise.resolve();
}

function getReadingTime(text, wordsPerMinute = 200) {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function truncateText(text, maxLength = 160) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
