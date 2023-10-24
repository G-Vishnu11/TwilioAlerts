require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/statusCheck', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'OK'
    });
});

app.use('/api', require('./api/controllers'));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
});