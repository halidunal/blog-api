const { createLogger, format, transports } = require("winston");
const { combine, timestamp, json } = format;
require("winston-daily-rotate-file");
const path = require("path");

const logger = createLogger({
  level: "info",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),
  transport: [
    new transports.DailyRotateFile({
      filename: "error.log",
      level: "error",
      dataPattern: path.resolve("yyyy-MM-dd."),
      dirname: "./public/logs",
    }),
  ],
});

module.exports = logger;
