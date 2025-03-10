const express = require('express');
const mongoose = require('mongoose');
const authroutes = require('./routes/authroutes');
const jrnalroutes = require('./routes/jrnalroutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully!')) // Success message
    .catch(err => console.log('MongoDB connection error:', err)); // Error message

// Routes
app.use('/api/auth', authroutes);
app.use('/api/journal', jrnalroutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Bullet Journal API');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));