const express = require('express');
const bodyParser = require('body-parser');
const chatbotRoutes = require('./routes/chatbot');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/chatbot', chatbotRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});