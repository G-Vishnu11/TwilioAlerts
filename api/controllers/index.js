const express = require('express');
const router = express.Router();
const twilio = require('../../utils/twilio');
const logger = require('../../utils/log');

router.get('/status', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Status OK'
    });
});

router.post('/generate-call', (req, res) => {
    if (!req.body.to || !req.body.from || !req.body.twimlUrl) {
        res.status(400).send({
            status: 400,
            message: 'Bad Request. Missing required parameters (to, from, url)'
        });
    }
    twilio.makePhoneCall.call({ params: req.body }, (err, response) => {
        if (err) {
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error' + err
            });
        } else {
            res.status(200).send({
                status: 200,
                message: response
            });
        }
    });
});

router.post('/generate-message', (req, res) => {
    if (!req.body.to || !req.body.from || !req.body.message) {
        res.status(400).send({
            status: 400,
            message: 'Bad Request. Missing required parameters (to, from, body)'
        });
    }
    twilio.sendMessage.call({ params: req.body }, (err, response) => {
        if (err) {
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error' + err
            });
        } else {
            res.status(200).send({
                status: 200,
                message: response
            });
        }
    });
});

module.exports = router;