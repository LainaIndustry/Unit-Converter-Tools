// Recent conversions management (localStorage)

const RECENT_KEY = 'convertsphere-recent';

function getRecentConversions() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
  } catch {
    return [];
  }
}

function addRecentConversion(category, from, to, value, result) {
  const recent = getRecentConversions();
  const entry = {
    category,
    from,
    to,
    value,
    result,
    timestamp: Date.now()
  };
  recent.unshift(entry);
  if (recent.length > 20) recent.pop();
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
}

function clearRecentConversions() {
  localStorage.removeItem(RECENT_KEY);
}
