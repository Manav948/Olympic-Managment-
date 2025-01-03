const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('localhost:27017/athleteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB Connection Error:', err));
