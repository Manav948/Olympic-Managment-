const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require('./config/db');  // Import the DB connection (this runs the connection logic)
const athleteRoutes = require('./routes/athleteRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(bodyParser.json());  // Parse incoming JSON requests
app.use('/api/athletes', athleteRoutes);  // Athlete routes under '/api/athletes'

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Start the server

app.post('/submit_room_allocation', (req, res) => {
    const { building, room, occupantName, occupantType } = req.body;
    // Save data to the database or perform any necessary processing
    res.json({ message: 'Room allocated successfully' });
});
