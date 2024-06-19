const Activity = require('../models/Activity');

exports.handleWebhook = async (req, res) => {
    const payload = req.body;

    try {
        const activity = new Activity({
            event:  payload.events, 
            user: payload.sender.login,
            repo: payload.repository.full_name,
            details: payload,
            createdAt: payload.created_at || new Date()
        });

        await activity.save();
        console.log('Activity saved to database');
        res.status(200).send('Webhook received');
    } catch (error) {
        console.error('Error saving activity to database', error);
        res.status(500).send('Error saving activity to database');
    }
};

exports.getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (error) {
        console.error('Error fetching activities', error);
        res.status(500).json({ error: 'Failed to fetch activities' });
    }
};

exports.getActivitiesByUser = async (req, res) => {
    const username = req.params.username;
    try {
        const activities = await Activity.find({ user: username });
        if (activities.length === 0) {
            return res.status(404).json({ error: 'No activities found for this user' });
        }
        res.json(activities);
    } catch (error) {
        console.error('Error fetching activities for user', error);
        res.status(500).json({ error: 'Failed to fetch activities for user' });
    }
};

exports.getActivityById = async (req, res) => {
    const id = req.params.id;
    try {
        const activity = await Activity.findById(id);
        if (!activity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json(activity);
    } catch (error) {
        console.error('Error fetching activity by ID', error);
        res.status(500).json({ error: 'Failed to fetch activity' });
    }
};
