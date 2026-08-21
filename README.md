# ConvertSphere - Unit Converter & Educational Blog

A complete, production-ready static website combining accurate unit conversion tools with an educational blog and learning resources.

## Features

- **20+ Conversion Categories**: Length, weight, temperature, area, volume, time, speed, pressure, energy, power, data storage, and more
- **Universal Converter**: Convert any unit with instant results
- **Popular Conversion Pages**: Dedicated pages for common conversions like kg to lbs, cm to inches, etc.
- **Educational Blog**: 15+ original articles about measurement systems, science, and everyday calculations
- **Dark/Light Mode**: User preference stored locally
- **Search**: Client-side search for converters, conversions, and blog articles
- **Mobile-First**: Fully responsive design that works on all devices
- **SEO-Ready**: Proper meta tags, structured data, and semantic HTML
- **AdSense Ready**: Non-intrusive advertisement placeholders

## Installation

1. Download or clone the repository
2. No build process required - it's pure HTML/CSS/JS
3. Open `index.html` in your browser

## Deployment

### Vercel
1. Push to a GitHub repository
2. Import to Vercel
3. Deploy

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect to your GitHub repository

### Cloudflare Pages
1. Connect your GitHub repository
2. Deploy

### GitHub Pages
1. Push to GitHub
2. Enable Pages in repository settings
3. Select the main branch

## Adding a Converter

1. Add unit definitions to `js/units-data.js`
2. Create a new HTML page in the `converters/` folder
3. Use the converter engine API:
   ```javascript
   converter.convert('category', 'fromUnit', 'toUnit', value)
