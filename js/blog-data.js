// Blog articles metadata
const BLOG_ARTICLES = [
  {
    id: 'metric-vs-imperial',
    title: 'Metric vs Imperial System: Understanding the Main Differences',
    category: 'measurement-guides',
    excerpt: 'Explore the key differences between the metric and imperial measurement systems, their origins, and where each is used today.',
    content: 'Full article content would go here...',
    readingTime: 8,
    date: '2026-01-15',
    image: '📊',
    tags: ['metric', 'imperial', 'measurement']
  },
  {
    id: 'how-unit-conversion-works',
    title: 'How Does Unit Conversion Work? A Beginner\'s Guide',
    category: 'measurement-guides',
    excerpt: 'Learn the fundamentals of unit conversion, from simple multiplication to more complex formulas used in science and engineering.',
    content: 'Full article content would go here...',
    readingTime: 6,
    date: '2026-01-12',
    image: '🧮',
    tags: ['conversion', 'basics', 'guide']
  },
  {
    id: 'complete-guide-length-measurements',
    title: 'The Complete Guide to Length Measurements',
    category: 'measurement-guides',
    excerpt: 'Everything you need to know about length measurements, from millimeters to miles, and how to convert between them.',
    content: 'Full article content would go here...',
    readingTime: 7,
    date: '2026-01-10',
    image: '📏',
    tags: ['length', 'measurement']
  },
  {
    id: 'mass-vs-weight-difference',
    title: 'Understanding the Difference Between Mass and Weight',
    category: 'science-engineering',
    excerpt: 'Discover the fundamental difference between mass and weight, and why it matters in science and everyday life.',
    content: 'Full article content would go here...',
    readingTime: 5,
    date: '2026-01-08',
    image: '⚖️',
    tags: ['mass', 'weight', 'physics']
  },
  {
    id: 'temperature-scales-explained',
    title: 'Celsius, Fahrenheit and Kelvin Explained',
    category: 'science-engineering',
    excerpt: 'A comprehensive guide to the three main temperature scales, their history, and how to convert between them.',
    content: 'Full article content would go here...',
    readingTime: 6,
    date: '2026-01-05',
    image: '🌡️',
    tags: ['temperature', 'celsius', 'fahrenheit', 'kelvin']
  },
  {
    id: 'how-to-convert-km-to-miles',
    title: 'How to Convert Kilometers to Miles',
    category: 'everyday-conversions',
    excerpt: 'Learn the simple formula to convert kilometers to miles, with practical examples and a handy conversion table.',
    content: 'Full article content would go here...',
    readingTime: 4,
    date: '2026-01-03',
    image: '🗺️',
    tags: ['km', 'miles', 'distance']
  },
  {
    id: 'how-to-convert-kg-to-lbs',
    title: 'How to Convert Kilograms to Pounds',
    category: 'everyday-conversions',
    excerpt: 'Master the kilogram to pound conversion with our step-by-step guide, including common examples and a quick reference.',
    content: 'Full article content would go here...',
    readingTime: 4,
    date: '2025-12-30',
    image: '🏋️',
    tags: ['kg', 'lbs', 'weight']
  },
  {
    id: 'bytes-bits-kb-mb-gb-tb-explained',
    title: 'Bytes, Bits, KB, MB, GB and TB Explained',
    category: 'technology-digital',
    excerpt: 'Demystify digital storage units from bits to terabytes, and understand the difference between decimal and binary prefixes.',
    content: 'Full article content would go here...',
    readingTime: 7,
    date: '2025-12-28',
    image: '💾',
    tags: ['bytes', 'storage', 'digital']
  },
  {
    id: 'pressure-units-explained',
    title: 'Understanding Pressure Units: PSI, Bar and Pascal',
    category: 'science-engineering',
    excerpt: 'A clear explanation of pressure measurement units, including PSI, Bar, Pascal, and when to use each one.',
    content: 'Full article content would go here...',
    readingTime: 6,
    date: '2025-12-25',
    image: '💨',
    tags: ['pressure', 'psi', 'bar', 'pascal']
  },
  {
    id: 'energy-units-explained',
    title: 'Energy Units Explained: Joules, Calories and Kilowatt Hours',
    category: 'science-engineering',
    excerpt: 'Understand the different units used to measure energy, from Joules to calories to kilowatt-hours.',
    content: 'Full article content would go here...',
    readingTime: 5,
    date: '2025-12-22',
    image: '⚡',
    tags: ['energy', 'joules', 'calories']
  },
  {
    id: 'common-conversion-mistakes',
    title: 'Common Unit Conversion Mistakes and How to Avoid Them',
    category: 'everyday-conversions',
    excerpt: 'Learn about the most frequent errors people make when converting units, and how to avoid them.',
    content: 'Full article content would go here...',
    readingTime: 4,
    date: '2025-12-20',
    image: '⚠️',
    tags: ['mistakes', 'tips']
  },
  {
    id: 'cooking-measurement-conversions',
    title: 'A Guide to Cooking Measurement Conversions',
    category: 'everyday-conversions',
    excerpt: 'Essential cooking conversions for recipes, including volume, weight, and temperature conversions for the kitchen.',
    content: 'Full article content would go here...',
    readingTime: 5,
    date: '2025-12-18',
    image: '🍳',
    tags: ['cooking', 'recipes', 'kitchen']
  },
  {
    id: 'speed-units-explained',
    title: 'Understanding Speed Units: KM/H, MPH and M/S',
    category: 'science-engineering',
    excerpt: 'A comprehensive guide to speed measurement units, their applications, and how to convert between them.',
    content: 'Full article content would go here...',
    readingTime: 5,
    date: '2025-12-15',
    image: '🚗',
    tags: ['speed', 'kmh', 'mph']
  },
  {
    id: 'international-system-of-units',
    title: 'How the International System of Units (SI) Works',
    category: 'measurement-guides',
    excerpt: 'Learn about the SI system, the international standard for measurement, and its seven base units.',
    content: 'Full article content would go here...',
    readingTime: 8,
    date: '2025-12-12',
    image: '🌐',
    tags: ['si', 'international', 'standards']
  },
  {
    id: 'scientific-measurements-guide',
    title: 'A Beginner\'s Guide to Scientific Measurements',
    category: 'science-engineering',
    excerpt: 'An introduction to the key measurement concepts used in science, from precision to significant figures.',
    content: 'Full article content would go here...',
    readingTime: 6,
    date: '2025-12-10',
    image: '🔬',
    tags: ['science', 'measurement', 'precision']
  }
];

// Blog categories
const BLOG_CATEGORIES = [
  { id: 'measurement-guides', name: 'Measurement Guides', icon: '📚' },
  { id: 'math-calculations', name: 'Math & Calculations', icon: '🧮' },
  { id: 'science-engineering', name: 'Science & Engineering', icon: '🔬' },
  { id: 'technology-digital', name: 'Technology & Digital', icon: '💻' },
  { id: 'everyday-conversions', name: 'Everyday Conversions', icon: '🏠' }
];

// Related articles mapping
function getRelatedArticles(articleId, count = 3) {
  const article = BLOG_ARTICLES.find(a => a.id === articleId);
  if (!article) return [];
  return BLOG_ARTICLES
    .filter(a => a.id !== articleId)
    .filter(a => {
      // Check for common tags
      return a.tags.some(tag => article.tags.includes(tag));
    })
    .slice(0, count);
}

// Get articles by category
function getArticlesByCategory(categoryId) {
  return BLOG_ARTICLES.filter(a => a.category === categoryId);
}

// Search articles
function searchArticles(query) {
  const q = query.toLowerCase();
  return BLOG_ARTICLES.filter(article => {
    return article.title.toLowerCase().includes(q) ||
           article.excerpt.toLowerCase().includes(q) ||
           article.category.toLowerCase().includes(q) ||
           article.tags.some(tag => tag.toLowerCase().includes(q));
  });
}
