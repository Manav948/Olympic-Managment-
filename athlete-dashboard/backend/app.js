const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Adjust path as necessary
const athleteRoutes = require('./routes/athleteRoutes');

dotenv.config(); // Load environment variables from .env file

connectDB(); // Connect to MongoDB

const app = express();
app.use(bodyParser.json());
app.use('/api/athletes', athleteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
