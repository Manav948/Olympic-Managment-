const express = require('express');
const Athlete = require('../models/Athlete');
const router = express.Router();

// Create athlete
router.post('/create', async (req, res) => {
  const { name, dob, sports, gender, nationality, bio, contact, height, weight, profilePicture } = req.body;
  
  try {
    const athlete = new Athlete({ name, dob, sports, gender, nationality, bio, contact, height, weight, profilePicture });
    await athlete.save();
    res.status(201).json({ message: 'Athlete added successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding athlete' });
  }
});

// Get athlete info by ID
router.get('/:id', async (req, res) => {
  try {
    const athlete = await Athlete.findById(req.params.id);
    if (!athlete) {
      return res.status(404).json({ message: 'Athlete not found' });
    }
    res.json(athlete);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching athlete data' });
  }
});

module.exports = router;
