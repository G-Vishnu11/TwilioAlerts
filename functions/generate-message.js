const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.handler = function (event, context, cb) {
    let params = JSON.parse(event.body);
    if (!params.to || !params.from || !params.message) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                status: 400,
                message: 'Bad Request. Missing required parameters (to, from, body)'
            })
        }
    }
    let body = params.message;
    let to = params.to;
    let from = params.from;
    client.messages.create({
        body: body,
        to: to,
        from: from
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
    return {
        statusCode: 200,
        body: JSON.stringify({
            status: 200,
            message: 'Message sent'
        })
    }
};