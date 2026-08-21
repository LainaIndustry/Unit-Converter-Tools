// Core conversion engine

class ConverterEngine {
  constructor() {
    this.data = UNIT_DATA;
  }

  // Convert value from one unit to another within a category
  convert(category, fromUnit, toUnit, value) {
    const catData = this.data[category];
    if (!catData) throw new Error(`Category "${category}" not found`);

    // Temperature special handling
    if (catData.isTemperature) {
      return this.convertTemperature(fromUnit, toUnit, value);
    }

    const fromFactor = catData.units[fromUnit]?.factor;
    const toFactor = catData.units[toUnit]?.factor;
    if (fromFactor === undefined || toFactor === undefined) {
      throw new Error('Unit not found');
    }

    // Convert to base unit (meters, kilograms, etc.)
    const baseValue = value * fromFactor;
    // Convert from base to target
    return baseValue / toFactor;
  }

  // Temperature conversions with proper formulas
  convertTemperature(from, to, value) {
    const tempMap = {
      c: { f: (v) => v * 9/5 + 32, k: (v) => v + 273.15, r: (v) => (v + 273.15) * 9/5 },
      f: { c: (v) => (v - 32) * 5/9, k: (v) => (v - 32) * 5/9 + 273.15, r: (v) => v + 459.67 },
      k: { c: (v) => v - 273.15, f: (v) => (v - 273.15) * 9/5 + 32, r: (v) => v * 9/5 },
      r: { c: (v) => (v - 491.67) * 5/9, f: (v) => v - 459.67, k: (v) => v * 5/9 }
    };

    if (from === to) return value;
    if (tempMap[from] && tempMap[from][to]) {
      return tempMap[from][to](value);
    }
    // Try reverse lookup
    for (const [key, val] of Object.entries(tempMap)) {
      if (val[from] && key === to) {
        // Convert to intermediate then to target
        const intermediate = val[from](value);
        return this.convertTemperature(from, to, intermediate);
      }
    }
    return value;
  }

  // Get all units for a category
  getUnits(category) {
    return this.data[category]?.units || {};
  }

  // Check if category exists
  hasCategory(category) {
    return !!this.data[category];
  }

  // Get category name
  getCategoryName(category) {
    return this.data[category]?.name || category;
  }

  // Format result with proper precision
  formatResult(value, precision = 6) {
    if (!isFinite(value)) return '∞';
    if (isNaN(value)) return 'Invalid';
    // Remove trailing zeros
    let formatted = parseFloat(value.toPrecision(precision));
    // Handle very small numbers
    if (Math.abs(formatted) < 1e-10) return '0';
    return String(formatted);
  }
}

// Create global instance
const converter = new ConverterEngine();

// Helper function for common conversions
function quickConvert(category, from, to, value) {
  return converter.convert(category, from, to, parseFloat(value) || 0);
}

// Unit display name helper
function getUnitDisplay(category, unitKey) {
  const unit = UNIT_DATA[category]?.units[unitKey];
  return unit ? unit.name : unitKey;
}
