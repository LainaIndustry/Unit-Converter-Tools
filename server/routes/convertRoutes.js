const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const convertController = require('../controllers/convertController');

// Validation middleware
const validateConversion = [
  body('fromUnit').isString().notEmpty().withMessage('From unit is required'),
  body('toUnit').isString().notEmpty().withMessage('To unit is required'),
  body('value').isNumeric().withMessage('Value must be a number'),
];

router.post('/', validateConversion, convertController.convert);

module.exports = router;
