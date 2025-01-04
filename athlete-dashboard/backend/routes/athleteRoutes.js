const express = require('express');
const Athlete = require('../models/Athlete');
const router = express.Router();

// Create an athlete
router.post('/create', async (req, res) => {
  const { name, dob, sports, gender, nationality, bio, contact, height, weight, profilePicture } = req.body;
  try {
    const athlete = new Athlete({ name, dob, sports, gender, nationality, bio, contact, height, weight, profilePicture });
    await athlete.save();
    res.status(201).json({ message: 'Athlete created successfully', athlete });
  } catch (err) {
    res.status(500).json({ message: 'Error creating athlete', error: err.message });
  }
});

// Get all athletes
router.get('/', async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.json(athletes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching athletes', error: err.message });
  }
});

module.exports = router;
