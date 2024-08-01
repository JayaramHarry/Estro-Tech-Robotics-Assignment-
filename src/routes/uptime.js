// src/routes/uptime.js
const express = require('express');
const Uptime = require('../models/Uptime');

const router = express.Router();

router.get('/:deviceId', async (req, res) => {
    const { deviceId } = req.params;
    try {
        const uptimes = await Uptime.find({ deviceId }).sort('timestamp');
        res.json(uptimes);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
