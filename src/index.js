const express = require('express');
const mongoose = require('mongoose');
const uptimeRoutes = require('./routes/uptime');
const analyticsRoutes = require('./routes/analytics');
const reportRoutes = require('./routes/report');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://akulajayaram96:7BjN2DmsHu3h6HLV@jayaram.md0blsx.mongodb.net/device-analytics');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

const startServer = async () => {
    await connectToDatabase();

    app.use(express.json());

    // Use routes without authentication
    app.use('/api/uptime', uptimeRoutes);
    app.use('/api/analytics', analyticsRoutes);
    app.use('/api/report', reportRoutes);

    app.use(errorHandler);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
