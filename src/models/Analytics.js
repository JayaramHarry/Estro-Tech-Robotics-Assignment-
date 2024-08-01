
const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
    deviceId: { type: String, required: true },
    data: { type: Map, of: Number, required: true },
    timestamp: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Analytics', AnalyticsSchema);
