const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  sports: { type: String, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  bio: { type: String },
  contact: { type: String },
  height: { type: String },
  weight: { type: String },
  profilePicture: { type: String }, // Optional URL
});