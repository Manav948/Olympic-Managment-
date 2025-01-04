const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/athleteDB')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB Connection Error:', err));
