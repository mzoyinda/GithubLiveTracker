const express = require('express');
const { handleWebhook, getAllActivities, getActivitiesByUser, getActivityById } = require('../controllers/activityController');

const router = express.Router();

router.post('/github-webhook', handleWebhook);
router.get('/activities', getAllActivities);
router.get('/activities/user/:username', getActivitiesByUser);
router.get('/activities/:id', getActivityById); 

module.exports = router;
