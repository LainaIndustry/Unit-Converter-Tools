const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController');

router.get('/', unitController.getAllUnits);
router.get('/category/:categoryId', unitController.getUnitsByCategory);

module.exports = router;
