
const express = require('express');
const Uptime = require('../models/Uptime');
const Analytics = require('../models/Analytics');

const router = express.Router();

router.get('/:deviceId', async (req, res) => {
    const { deviceId } = req.params;
    try {
        const uptimes = await Uptime.find({ deviceId }).sort('timestamp');
        const analytics = await Analytics.find({ deviceId }).sort('timestamp');
        
        res.json({ uptimes, analytics });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
