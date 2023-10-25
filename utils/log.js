let winston = require('winston');
let _ = require('lodash');
let dayjs = require('dayjs');

let consoleLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: '../logs/error.log', level: 'error' }),
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    ],
});

let log = (msg, metadata, context) => {
    metadata = _.cloneDeep(_.extend(metadata, (_.extend(context, { timestamp: dayjs().format('HH:mm:ss YYYY-MM-DD')}))));
    consoleLogger.log(metadata.level, msg, metadata);
}

module.exports = {
    log: log
}