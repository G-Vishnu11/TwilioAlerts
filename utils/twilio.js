let logger = require('./log');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

let makePhoneCall = function (cb) {
    let params = this.params;
    let url = params.twimlUrl;
    let to = params.to;
    let from = params.from;
    client.calls.create({
        url: url,
        to: to,
        from: from,
    }, (err, res) => {
        if (err) {
            logger.log('Error making call', { level: 'error'});
            cb(err, null);
        } else {
            logger.log('Call made', { level: 'info'});
            cb(null, res);
        }
    });
};

let sendMessage = function (cb) {
    let params = this.params;
    let body = params.message;
    let to = params.to;
    let from = params.from;
    client.messages.create({
        body: body,
        to: to,
        from: from
    }, (err, res) => {
        if (err) {
            logger.log('Error sending message', { level: 'error'});
            cb(err, null);
        } else {
            logger.log('Message sent', { level: 'info'});
            cb(null, res);
        }
    });
};

module.exports = {
    makePhoneCall: makePhoneCall,
    sendMessage: sendMessage
};