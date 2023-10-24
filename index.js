const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Root'
    });
});

app.get('/status', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'OK'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});