const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from backend microservice!' });
});

app.listen(PORT, () => {
    console.log(`Backend microservice running on port ${PORT}`);
});

