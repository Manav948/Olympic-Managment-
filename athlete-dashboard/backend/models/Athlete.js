const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  sports: { type: String, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  profilePicture: { type: String }, // Optional: URL for profile picture
  bio: { type: String }, // Short bio
  contact: { type: String }, // Contact info like phone number
  height: { type: String }, // Athlete height
  weight: { type: String }, // Athlete weight
});

module.exports = mongoose.model('Athlete', athleteSchema);
