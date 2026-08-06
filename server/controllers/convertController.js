const Unit = require('../models/Unit');
const { validationResult } = require('express-validator');

// Temperature conversion logic (special cases)
const convertTemperature = (value, fromUnit, toUnit) => {
  // Convert to Celsius first
  let celsius;
  switch (fromUnit) {
    case '°C':
      celsius = value;
      break;
    case '°F':
      celsius = (value - 32) * 5 / 9;
      break;
    case 'K':
      celsius = value - 273.15;
      break;
    case '°R':
      celsius = (value - 491.67) * 5 / 9;
      break;
    default:
      throw new Error('Invalid temperature unit');
  }

  // Convert from Celsius to target unit
  switch (toUnit) {
    case '°C':
      return celsius;
    case '°F':
      return (celsius * 9 / 5) + 32;
    case 'K':
      return celsius + 273.15;
    case '°R':
      return (celsius + 273.15) * 9 / 5;
    default:
      throw new Error('Invalid temperature unit');
  }
};

exports.convert = async (req, res) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { fromUnit, toUnit, value } = req.body;

    // Validate value
    if (value === undefined || value === null) {
      return res.status(400).json({
        success: false,
        message: 'Value is required',
      });
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid numeric value',
      });
    }

    // Fetch units from database
    const fromUnitData = await Unit.findOne({ symbol: fromUnit });
    const toUnitData = await Unit.findOne({ symbol: toUnit });

    if (!fromUnitData) {
      return res.status(404).json({
        success: false,
        message: `Unit '${fromUnit}' not found`,
      });
    }

    if (!toUnitData) {
      return res.status(404).json({
        success: false,
        message: `Unit '${toUnit}' not found`,
      });
    }

    // Check if both units are in the same category
    if (fromUnitData.category.toString() !== toUnitData.category.toString()) {
      return res.status(400).json({
        success: false,
        message: 'Units must be from the same category',
      });
    }

    let result;

    // Special handling for temperature
    const category = await Unit.findById(fromUnitData.category).populate('category');
    if (category && category.slug === 'temperature') {
      result = convertTemperature(numericValue, fromUnit, toUnit);
    } else {
      // Standard conversion using base unit
      const baseValue = numericValue * fromUnitData.baseConversionFactor;
      result = baseValue / toUnitData.baseConversionFactor;
    }

    // Round to 10 decimal places to avoid floating-point issues
    result = Math.round(result * 10000000000) / 10000000000;

    res.json({
      success: true,
      data: {
        fromUnit: fromUnitData,
        toUnit: toUnitData,
        inputValue: numericValue,
        result: result,
      },
    });
  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Conversion failed',
    });
  }
};
