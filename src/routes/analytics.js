const express = require('express');
const Analytics = require('../models/Analytics');

const router = express.Router();

router.get('/:deviceId', async (req, res) => {
    const { deviceId } = req.params;
    try {
        const analytics = await Analytics.find({ deviceId }).sort('timestamp');
        res.json(analytics);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
