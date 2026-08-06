const Unit = require('../models/Unit');

exports.getAllUnits = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    
    const units = await Unit.find(filter).populate('category', 'name slug');
    
    res.json({
      success: true,
      count: units.length,
      data: units,
    });
  } catch (error) {
    console.error('Error fetching units:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch units',
    });
  }
};

exports.getUnitsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    
    const units = await Unit.find({ category: categoryId }).populate('category', 'name slug');
    
    res.json({
      success: true,
      count: units.length,
      data: units,
    });
  } catch (error) {
    console.error('Error fetching units by category:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch units by category',
    });
  }
};
