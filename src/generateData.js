const mongoose = require('mongoose');
const Uptime = require('./models/Uptime');
const Analytics = require('./models/Analytics');

const dbURI = 'mongodb+srv://akulajayaram96:7BjN2DmsHu3h6HLV@jayaram.md0blsx.mongodb.net/device-analytics';

// Connect to MongoDB
mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    });

const deviceIds = ['device1', 'device2'];

const generateData = async () => {
    try {
        // Clear existing data
        await Uptime.deleteMany({});
        await Analytics.deleteMany({});

        // Generate uptime data
        for (const deviceId of deviceIds) {
            let currentState = 'off';
            for (let i = 0; i < 1440; i++) {
                currentState = currentState === 'off' ? 'on' : 'off';
                const uptime = new Uptime({
                    deviceId,
                    state: currentState,
                    timestamp: new Date(Date.now() - i * 60000)
                });
                await uptime.save();
            }

            // Generate analytics data
            for (let i = 0; i < 60; i++) {
                const data = {};
                for (let j = 0; j < 24; j++) {
                    data[`hour_${j}`] = Math.floor(Math.random() * 100);
                }
                const analytics = new Analytics({
                    deviceId,
                    data,
                    timestamp: new Date(Date.now() - i * 86400000)
                });
                await analytics.save();
            }
        }

        console.log('Data generation complete');
    } catch (error) {
        console.error('Data generation error:', error);
    } finally {
        // Close MongoDB connection
        mongoose.connection.close();
    }
};

// Run data generation
generateData();
