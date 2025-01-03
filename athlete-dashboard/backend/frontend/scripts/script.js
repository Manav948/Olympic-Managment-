const express = require('express');
const Joi = require('joi');
const Athlete = require('../models/Athlete');
const router = express.Router();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connect(process.env.MONGO_URI);


// Validation Schema
const athleteSchema = Joi.object({
    name: Joi.string().min(3).required(),
    dob: Joi.date().required(),
    sports: Joi.string().required(),
    gender: Joi.string().valid('Male', 'Female', 'Other').required(),
    nationality: Joi.string().required(),
    bio: Joi.string().optional(),
    contact: Joi.string().optional(),
    height: Joi.string().optional(),
    weight: Joi.string().optional(),
    profilePicture: Joi.string().uri().optional(),
});

// Create athlete
router.post('/create', async (req, res) => {
    const { error, value } = athleteSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const athlete = new Athlete(value);
        await athlete.save();
        res.status(201).json({ message: 'Athlete added successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding athlete' });
    }
});
