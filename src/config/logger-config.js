const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(( { level, message, timestamp, error } ) => {
    return `${timestamp} : ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat,
    ),
    //where you want to put your logs , it will come inside array of transport
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ],
});

module.exports = logger;