const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('../models/Category');
const Unit = require('../models/Unit');

dotenv.config();

const categories = [
  {
    name: 'Length',
    slug: 'length',
    icon: '📏',
    description: 'Convert between different length units',
    isPopular: true,
    order: 1,
  },
  {
    name: 'Mass',
    slug: 'mass',
    icon: '⚖️',
    description: 'Convert between different mass units',
    isPopular: true,
    order: 2,
  },
  {
    name: 'Volume',
    slug: 'volume',
    icon: '📦',
    description: 'Convert between different volume units',
    isPopular: true,
    order: 3,
  },
  {
    name: 'Temperature',
    slug: 'temperature',
    icon: '🌡️',
    description: 'Convert between different temperature units',
    isPopular: true,
    order: 4,
  },
  {
    name: 'Area',
    slug: 'area',
    icon: '📐',
    description: 'Convert between different area units',
    isPopular: true,
    order: 5,
  },
  {
    name: 'Speed',
    slug: 'speed',
    icon: '🏃',
    description: 'Convert between different speed units',
    isPopular: true,
    order: 6,
  },
  {
    name: 'Time',
    slug: 'time',
    icon: '⏰',
    description: 'Convert between different time units',
    isPopular: true,
    order: 7,
  },
  {
    name: 'Pressure',
    slug: 'pressure',
    icon: '💨',
    description: 'Convert between different pressure units',
    isPopular: true,
    order: 8,
  },
  {
    name: 'Engineering',
    slug: 'engineering',
    icon: '🔧',
    description: 'Engineering unit conversions',
    isPopular: false,
    order: 9,
  },
  {
    name: 'Heat',
    slug: 'heat',
    icon: '🔥',
    description: 'Heat and energy unit conversions',
    isPopular: false,
    order: 10,
  },
  {
    name: 'Fluids',
    slug: 'fluids',
    icon: '💧',
    description: 'Fluid and hydraulic unit conversions',
    isPopular: false,
    order: 11,
  },
  {
    name: 'Light',
    slug: 'light',
    icon: '💡',
    description: 'Light and optical unit conversions',
    isPopular: false,
    order: 12,
  },
  {
    name: 'Electricity',
    slug: 'electricity',
    icon: '⚡',
    description: 'Electrical unit conversions',
    isPopular: false,
    order: 13,
  },
  {
    name: 'Magnetism',
    slug: 'magnetism',
    icon: '🧲',
    description: 'Magnetic unit conversions',
    isPopular: false,
    order: 14,
  },
  {
    name: 'Radiology',
    slug: 'radiology',
    icon: '☢️',
    description: 'Radiology and radiation unit conversions',
    isPopular: false,
    order: 15,
  },
  {
    name: 'Other',
    slug: 'other',
    icon: '🔄',
    description: 'Other miscellaneous unit conversions',
    isPopular: false,
    order: 16,
  },
];

const units = {
  length: [
    { name: 'Meter', symbol: 'm', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Kilometer', symbol: 'km', baseConversionFactor: 1000, isBaseUnit: false },
    { name: 'Centimeter', symbol: 'cm', baseConversionFactor: 0.01, isBaseUnit: false },
    { name: 'Millimeter', symbol: 'mm', baseConversionFactor: 0.001, isBaseUnit: false },
    { name: 'Mile', symbol: 'mi', baseConversionFactor: 1609.344, isBaseUnit: false },
    { name: 'Yard', symbol: 'yd', baseConversionFactor: 0.9144, isBaseUnit: false },
    { name: 'Foot', symbol: 'ft', baseConversionFactor: 0.3048, isBaseUnit: false },
    { name: 'Inch', symbol: 'in', baseConversionFactor: 0.0254, isBaseUnit: false },
    { name: 'Nautical Mile', symbol: 'nmi', baseConversionFactor: 1852, isBaseUnit: false },
  ],
  mass: [
    { name: 'Kilogram', symbol: 'kg', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Gram', symbol: 'g', baseConversionFactor: 0.001, isBaseUnit: false },
    { name: 'Milligram', symbol: 'mg', baseConversionFactor: 0.000001, isBaseUnit: false },
    { name: 'Pound', symbol: 'lb', baseConversionFactor: 0.45359237, isBaseUnit: false },
    { name: 'Ounce', symbol: 'oz', baseConversionFactor: 0.0283495, isBaseUnit: false },
    { name: 'Ton (metric)', symbol: 't', baseConversionFactor: 1000, isBaseUnit: false },
    { name: 'Ton (US)', symbol: 'ton', baseConversionFactor: 907.18474, isBaseUnit: false },
    { name: 'Stone', symbol: 'st', baseConversionFactor: 6.35029318, isBaseUnit: false },
  ],
  volume: [
    { name: 'Liter', symbol: 'L', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Milliliter', symbol: 'mL', baseConversionFactor: 0.001, isBaseUnit: false },
    { name: 'Gallon (US)', symbol: 'gal', baseConversionFactor: 3.785411784, isBaseUnit: false },
    { name: 'Quart (US)', symbol: 'qt', baseConversionFactor: 0.946352946, isBaseUnit: false },
    { name: 'Pint (US)', symbol: 'pt', baseConversionFactor: 0.473176473, isBaseUnit: false },
    { name: 'Cup (US)', symbol: 'cup', baseConversionFactor: 0.2365882365, isBaseUnit: false },
    { name: 'Fluid Ounce (US)', symbol: 'fl oz', baseConversionFactor: 0.0295735296, isBaseUnit: false },
    { name: 'Cubic Meter', symbol: 'm³', baseConversionFactor: 1000, isBaseUnit: false },
    { name: 'Cubic Foot', symbol: 'ft³', baseConversionFactor: 28.3168466, isBaseUnit: false },
  ],
  temperature: [
    { name: 'Celsius', symbol: '°C', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Fahrenheit', symbol: '°F', baseConversionFactor: 1, isBaseUnit: false },
    { name: 'Kelvin', symbol: 'K', baseConversionFactor: 1, isBaseUnit: false },
    { name: 'Rankine', symbol: '°R', baseConversionFactor: 1, isBaseUnit: false },
  ],
  area: [
    { name: 'Square Meter', symbol: 'm²', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Square Kilometer', symbol: 'km²', baseConversionFactor: 1000000, isBaseUnit: false },
    { name: 'Square Foot', symbol: 'ft²', baseConversionFactor: 0.09290304, isBaseUnit: false },
    { name: 'Acre', symbol: 'ac', baseConversionFactor: 4046.8564224, isBaseUnit: false },
    { name: 'Hectare', symbol: 'ha', baseConversionFactor: 10000, isBaseUnit: false },
    { name: 'Square Mile', symbol: 'mi²', baseConversionFactor: 2589988.110336, isBaseUnit: false },
  ],
  speed: [
    { name: 'Meter/Second', symbol: 'm/s', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Kilometer/Hour', symbol: 'km/h', baseConversionFactor: 0.277777778, isBaseUnit: false },
    { name: 'Mile/Hour', symbol: 'mph', baseConversionFactor: 0.44704, isBaseUnit: false },
    { name: 'Knot', symbol: 'kn', baseConversionFactor: 0.514444444, isBaseUnit: false },
    { name: 'Foot/Second', symbol: 'ft/s', baseConversionFactor: 0.3048, isBaseUnit: false },
  ],
  time: [
    { name: 'Second', symbol: 's', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Minute', symbol: 'min', baseConversionFactor: 60, isBaseUnit: false },
    { name: 'Hour', symbol: 'h', baseConversionFactor: 3600, isBaseUnit: false },
    { name: 'Day', symbol: 'd', baseConversionFactor: 86400, isBaseUnit: false },
    { name: 'Week', symbol: 'wk', baseConversionFactor: 604800, isBaseUnit: false },
    { name: 'Month', symbol: 'mo', baseConversionFactor: 2592000, isBaseUnit: false },
    { name: 'Year', symbol: 'yr', baseConversionFactor: 31536000, isBaseUnit: false },
  ],
  pressure: [
    { name: 'Pascal', symbol: 'Pa', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Kilopascal', symbol: 'kPa', baseConversionFactor: 1000, isBaseUnit: false },
    { name: 'Bar', symbol: 'bar', baseConversionFactor: 100000, isBaseUnit: false },
    { name: 'PSI', symbol: 'psi', baseConversionFactor: 6894.75729, isBaseUnit: false },
    { name: 'Atmosphere', symbol: 'atm', baseConversionFactor: 101325, isBaseUnit: false },
    { name: 'Torr', symbol: 'Torr', baseConversionFactor: 133.322368, isBaseUnit: false },
  ],
  engineering: [
    { name: 'Newton', symbol: 'N', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Kilonewton', symbol: 'kN', baseConversionFactor: 1000, isBaseUnit: false },
    { name: 'Pound-force', symbol: 'lbf', baseConversionFactor: 4.44822162, isBaseUnit: false },
    { name: 'Joule', symbol: 'J', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Kilojoule', symbol: 'kJ', baseConversionFactor: 1000, isBaseUnit: false },
    { name: 'Calorie', symbol: 'cal', baseConversionFactor: 4.184, isBaseUnit: false },
    { name: 'Watt', symbol: 'W', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Kilowatt', symbol: 'kW', baseConversionFactor: 1000, isBaseUnit: false },
  ],
  heat: [
    { name: 'Joule', symbol: 'J', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Kilojoule', symbol: 'kJ', baseConversionFactor: 1000, isBaseUnit: false },
    { name: 'Calorie', symbol: 'cal', baseConversionFactor: 4.184, isBaseUnit: false },
    { name: 'Kilocalorie', symbol: 'kcal', baseConversionFactor: 4184, isBaseUnit: false },
    { name: 'BTU', symbol: 'BTU', baseConversionFactor: 1055.05585, isBaseUnit: false },
    { name: 'Therm', symbol: 'thm', baseConversionFactor: 105505585.3, isBaseUnit: false },
  ],
  fluids: [
    { name: 'Pascal Second', symbol: 'Pa·s', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Poise', symbol: 'P', baseConversionFactor: 0.1, isBaseUnit: false },
    { name: 'Centipoise', symbol: 'cP', baseConversionFactor: 0.001, isBaseUnit: false },
    { name: 'Stokes', symbol: 'St', baseConversionFactor: 0.0001, isBaseUnit: false },
    { name: 'Centistokes', symbol: 'cSt', baseConversionFactor: 0.000001, isBaseUnit: false },
  ],
  light: [
    { name: 'Lumen', symbol: 'lm', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Lux', symbol: 'lx', baseConversionFactor: 1, isBaseUnit: false },
    { name: 'Candela', symbol: 'cd', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Foot-candle', symbol: 'fc', baseConversionFactor: 10.76391, isBaseUnit: false },
  ],
  electricity: [
    { name: 'Volt', symbol: 'V', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Ampere', symbol: 'A', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Ohm', symbol: 'Ω', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Watt', symbol: 'W', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Kilowatt', symbol: 'kW', baseConversionFactor: 1000, isBaseUnit: false },
    { name: 'Horsepower', symbol: 'hp', baseConversionFactor: 745.699872, isBaseUnit: false },
  ],
  magnetism: [
    { name: 'Tesla', symbol: 'T', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Gauss', symbol: 'G', baseConversionFactor: 0.0001, isBaseUnit: false },
    { name: 'Weber', symbol: 'Wb', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Maxwell', symbol: 'Mx', baseConversionFactor: 0.00000001, isBaseUnit: false },
  ],
  radiology: [
    { name: 'Gray', symbol: 'Gy', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Sievert', symbol: 'Sv', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Becquerel', symbol: 'Bq', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Curie', symbol: 'Ci', baseConversionFactor: 37000000000, isBaseUnit: false },
    { name: 'Rad', symbol: 'rad', baseConversionFactor: 0.01, isBaseUnit: false },
  ],
  other: [
    { name: 'Percent', symbol: '%', baseConversionFactor: 1, isBaseUnit: true },
    { name: 'Permille', symbol: '‰', baseConversionFactor: 0.1, isBaseUnit: false },
    { name: 'Parts Per Million', symbol: 'ppm', baseConversionFactor: 0.0001, isBaseUnit: false },
  ],
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Category.deleteMany({});
    await Unit.deleteMany({});
    console.log('Cleared existing data');

    // Insert categories
    const insertedCategories = await Category.insertMany(categories);
    console.log(`Inserted ${insertedCategories.length} categories`);

    // Insert units for each category
    for (const category of insertedCategories) {
      const categoryUnits = units[category.slug] || [];
      const unitsWithCategory = categoryUnits.map(unit => ({
        ...unit,
        category: category._id,
      }));
      
      if (unitsWithCategory.length > 0) {
        await Unit.insertMany(unitsWithCategory);
        console.log(`Inserted ${unitsWithCategory.length} units for ${category.name}`);
      }
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
