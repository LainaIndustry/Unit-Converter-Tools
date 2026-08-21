// Favorites management (localStorage)

const FAVORITES_KEY = 'convertsphere-favorites';

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function addFavorite(category, from, to) {
  const favorites = getFavorites();
  const key = `${category}:${from}:${to}`;
  if (!favorites.find(f => f.key === key)) {
    favorites.push({ key, category, from, to });
    saveFavorites(favorites);
  }
}

function removeFavorite(category, from, to) {
  const favorites = getFavorites();
  const key = `${category}:${from}:${to}`;
  const filtered = favorites.filter(f => f.key !== key);
  saveFavorites(filtered);
}

function isFavorite(category, from, to) {
  const favorites = getFavorites();
  const key = `${category}:${from}:${to}`;
  return favorites.some(f => f.key === key);
}

function toggleFavorite(category, from, to) {
  if (isFavorite(category, from, to)) {
    removeFavorite(category, from, to);
    return false;
  } else {
    addFavorite(category, from, to);
    return true;
  }
}
