exports.handler = function (event, context, cb) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            status: 200,
            message: 'OK'
        })
    }
}