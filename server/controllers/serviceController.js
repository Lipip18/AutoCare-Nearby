const Service = require('../models/Service');

// GET /api/services
const getServices = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = { isActive: true };
    if (category) filter.category = { $in: [category, 'both'] };
    const services = await Service.find(filter);
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/services/:id
const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getServices, getService };