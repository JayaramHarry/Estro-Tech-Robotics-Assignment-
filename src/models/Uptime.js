// src/models/Uptime.js
const mongoose = require('mongoose');

const UptimeSchema = new mongoose.Schema({
    deviceId: { type: String, required: true },
    state: { type: String, required: true },
    timestamp: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Uptime', UptimeSchema);
