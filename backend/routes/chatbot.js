const express = require('express');
const router = express.Router();
const axios = require('axios');

// Endpoint to handle user messages
router.post('/message', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
            sender: 'user',
            message: userMessage
        });

        const botMessages = response.data;
        res.json(botMessages);
    } catch (error) {
        console.error('Error communicating with Rasa:', error);
        res.status(500).send('Error communicating with Rasa');
    }
});

module.exports = router;