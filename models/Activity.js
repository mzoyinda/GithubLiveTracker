const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    event: [String],
    user: String,
    repo: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    details: mongoose.Schema.Types.Mixed,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
