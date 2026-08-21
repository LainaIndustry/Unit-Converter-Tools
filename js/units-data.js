// Complete unit definitions for all categories
const UNIT_DATA = {
  length: {
    name: 'Length',
    icon: '📏',
    units: {
      mm: { name: 'Millimeter', factor: 0.001 },
      cm: { name: 'Centimeter', factor: 0.01 },
      m: { name: 'Meter', factor: 1 },
      km: { name: 'Kilometer', factor: 1000 },
      in: { name: 'Inch', factor: 0.0254 },
      ft: { name: 'Foot', factor: 0.3048 },
      yd: { name: 'Yard', factor: 0.9144 },
      mi: { name: 'Mile', factor: 1609.344 },
      nmi: { name: 'Nautical Mile', factor: 1852 },
      µm: { name: 'Micrometer', factor: 0.000001 },
      nm: { name: 'Nanometer', factor: 0.000000001 }
    }
  },
  weight: {
    name: 'Weight',
    icon: '⚖️',
    units: {
      mg: { name: 'Milligram', factor: 0.000001 },
      g: { name: 'Gram', factor: 0.001 },
      kg: { name: 'Kilogram', factor: 1 },
      t: { name: 'Metric Ton', factor: 1000 },
      oz: { name: 'Ounce', factor: 0.0283495 },
      lb: { name: 'Pound', factor: 0.453592 },
      st: { name: 'Stone', factor: 6.35029 },
      us_ton: { name: 'US Ton', factor: 907.185 },
      uk_ton: { name: 'Imperial Ton', factor: 1016.05 }
    }
  },
  temperature: {
    name: 'Temperature',
    icon: '🌡️',
    units: {
      c: { name: 'Celsius', factor: null },
      f: { name: 'Fahrenheit', factor: null },
      k: { name: 'Kelvin', factor: null },
      r: { name: 'Rankine', factor: null }
    },
    isTemperature: true
  },
  area: {
    name: 'Area',
    icon: '📐',
    units: {
      mm2: { name: 'Square Millimeter', factor: 0.000001 },
      cm2: { name: 'Square Centimeter', factor: 0.0001 },
      m2: { name: 'Square Meter', factor: 1 },
      km2: { name: 'Square Kilometer', factor: 1000000 },
      in2: { name: 'Square Inch', factor: 0.00064516 },
      ft2: { name: 'Square Foot', factor: 0.092903 },
      yd2: { name: 'Square Yard', factor: 0.836127 },
      acre: { name: 'Acre', factor: 4046.86 },
      ha: { name: 'Hectare', factor: 10000 },
      mi2: { name: 'Square Mile', factor: 2589988 }
    }
  },
  volume: {
    name: 'Volume',
    icon: '🧊',
    units: {
      ml: { name: 'Milliliter', factor: 0.000001 },
      l: { name: 'Liter', factor: 0.001 },
      m3: { name: 'Cubic Meter', factor: 1 },
      cm3: { name: 'Cubic Centimeter', factor: 0.000001 },
      gal_us: { name: 'US Gallon', factor: 0.00378541 },
      gal_uk: { name: 'Imperial Gallon', factor: 0.00454609 },
      qt: { name: 'Quart', factor: 0.000946353 },
      pt: { name: 'Pint', factor: 0.000473176 },
      cup: { name: 'Cup', factor: 0.000236588 },
      fl_oz: { name: 'Fluid Ounce', factor: 0.0000295735 },
      tbsp: { name: 'Tablespoon', factor: 0.0000147868 },
      tsp: { name: 'Teaspoon', factor: 0.00000492892 }
    }
  },
  time: {
    name: 'Time',
    icon: '⏱️',
    units: {
      ns: { name: 'Nanosecond', factor: 1e-9 },
      µs: { name: 'Microsecond', factor: 1e-6 },
      ms: { name: 'Millisecond', factor: 0.001 },
      s: { name: 'Second', factor: 1 },
      min: { name: 'Minute', factor: 60 },
      hr: { name: 'Hour', factor: 3600 },
      day: { name: 'Day', factor: 86400 },
      week: { name: 'Week', factor: 604800 },
      month: { name: 'Month', factor: 2592000 },
      year: { name: 'Year', factor: 31536000 }
    }
  },
  speed: {
    name: 'Speed',
    icon: '🚀',
    units: {
      m_s: { name: 'Meters per Second', factor: 1 },
      km_h: { name: 'Kilometers per Hour', factor: 0.277778 },
      mph: { name: 'Miles per Hour', factor: 0.44704 },
      knot: { name: 'Knot', factor: 0.514444 },
      ft_s: { name: 'Feet per Second', factor: 0.3048 },
      mach: { name: 'Mach', factor: 343 }
    }
  },
  pressure: {
    name: 'Pressure',
    icon: '💨',
    units: {
      pa: { name: 'Pascal', factor: 1 },
      kpa: { name: 'Kilopascal', factor: 1000 },
      bar: { name: 'Bar', factor: 100000 },
      psi: { name: 'PSI', factor: 6894.76 },
      atm: { name: 'Atmosphere', factor: 101325 },
      torr: { name: 'Torr', factor: 133.322 },
      mmhg: { name: 'mmHg', factor: 133.322 }
    }
  },
  energy: {
    name: 'Energy',
    icon: '⚡',
    units: {
      j: { name: 'Joule', factor: 1 },
      kj: { name: 'Kilojoule', factor: 1000 },
      cal: { name: 'Calorie', factor: 4.184 },
      kcal: { name: 'Kilocalorie', factor: 4184 },
      wh: { name: 'Watt-hour', factor: 3600 },
      kwh: { name: 'Kilowatt-hour', factor: 3600000 },
      btu: { name: 'BTU', factor: 1055.06 }
    }
  },
  power: {
    name: 'Power',
    icon: '💡',
    units: {
      w: { name: 'Watt', factor: 1 },
      kw: { name: 'Kilowatt', factor: 1000 },
      mw: { name: 'Megawatt', factor: 1000000 },
      hp: { name: 'Horsepower', factor: 745.7 }
    }
  },
  storage: {
    name: 'Data Storage',
    icon: '💾',
    units: {
      bit: { name: 'Bit', factor: 0.125 },
      byte: { name: 'Byte', factor: 1 },
      kb: { name: 'Kilobyte', factor: 1000 },
      mb: { name: 'Megabyte', factor: 1000000 },
      gb: { name: 'Gigabyte', factor: 1000000000 },
      tb: { name: 'Terabyte', factor: 1000000000000 },
      pb: { name: 'Petabyte', factor: 1e15 },
      kib: { name: 'Kibibyte', factor: 1024 },
      mib: { name: 'Mebibyte', factor: 1048576 },
      gib: { name: 'Gibibyte', factor: 1073741824 }
    }
  },
  force: {
    name: 'Force',
    icon: '💪',
    units: {
      n: { name: 'Newton', factor: 1 },
      kn: { name: 'Kilonewton', factor: 1000 },
      dyn: { name: 'Dyne', factor: 0.00001 },
      kgf: { name: 'Kilogram-force', factor: 9.80665 },
      lbf: { name: 'Pound-force', factor: 4.44822 }
    }
  },
  angle: {
    name: 'Angle',
    icon: '📐',
    units: {
      deg: { name: 'Degree', factor: 1 },
      rad: { name: 'Radian', factor: 57.2958 },
      grad: { name: 'Gradian', factor: 0.9 }
    }
  },
  frequency: {
    name: 'Frequency',
    icon: '📶',
    units: {
      hz: { name: 'Hertz', factor: 1 },
      khz: { name: 'Kilohertz', factor: 1000 },
      mhz: { name: 'Megahertz', factor: 1000000 },
      ghz: { name: 'Gigahertz', factor: 1000000000 }
    }
  },
  density: {
    name: 'Density',
    icon: '⚗️',
    units: {
      kg_m3: { name: 'kg/m³', factor: 1 },
      g_cm3: { name: 'g/cm³', factor: 1000 },
      lb_ft3: { name: 'lb/ft³', factor: 16.0185 }
    }
  },
  torque: {
    name: 'Torque',
    icon: '🔧',
    units: {
      nm: { name: 'Newton Meter', factor: 1 },
      lb_ft: { name: 'Pound-foot', factor: 1.35582 },
      lb_in: { name: 'Pound-inch', factor: 0.112985 }
    }
  },
  acceleration: {
    name: 'Acceleration',
    icon: '📈',
    units: {
      m_s2: { name: 'm/s²', factor: 1 },
      ft_s2: { name: 'ft/s²', factor: 0.3048 },
      g: { name: 'G-force', factor: 9.80665 }
    }
  },
  flow: {
    name: 'Flow',
    icon: '🌊',
    units: {
      l_min: { name: 'Liters/min', factor: 1 },
      gal_min: { name: 'Gallons/min', factor: 3.78541 },
      m3_h: { name: 'm³/h', factor: 16.6667 }
    }
  },
  fuel: {
    name: 'Fuel Consumption',
    icon: '⛽',
    units: {
      l_100km: { name: 'L/100km', factor: 1 },
      mpg_us: { name: 'MPG (US)', factor: 235.215 },
      mpg_uk: { name: 'MPG (UK)', factor: 282.481 }
    }
  }
};

// Category list for navigation
const CATEGORY_LIST = Object.keys(UNIT_DATA).map(key => ({
  id: key,
  name: UNIT_DATA[key].name,
  icon: UNIT_DATA[key].icon
}));
