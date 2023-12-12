const express = require('express');
const router = express.Router();
const CompoundInfo = require('./../model/CompoundInfo');

// Get all compounds
router.get('/compounds', async (req, res) => {
  try {
    const compounds = await CompoundInfo.findAll();
    res.json(compounds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get compound by ID
router.get('/compounds/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const compound = await CompoundInfo.findByPk(id); //primary key
    if (!compound) {
      return res.status(404).json({ error: 'Compound not found' });
    }
    res.json(compound);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a compound
router.post('/compounds', async (req, res) => {
  try {
    const newCompound = await CompoundInfo.create(req.body);
    res.json(newCompound);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a compound
router.put('/compounds/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await CompoundInfo.update(req.body, {
      where: { id },
    });
    if (!updated) {
      return res.status(404).json({ error: 'Compound not found' });
    }
    const updatedCompound = await CompoundInfo.findByPk(id);
    res.json(updatedCompound);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a compound
router.delete('/compounds/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CompoundInfo.destroy({
      where: { id },
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Compound not found' });
    }
    res.json({ message: 'Compound deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
