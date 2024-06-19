const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const activityRoutes = require('./routes/activityRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', activityRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
