// Import the `chalk` library for colorizing the log output
const chalk = require('chalk');

// Define the log levels and their corresponding colors
const logLevels = {
  debug: 'blue',
  info: 'green',
  warning: 'yellow',
  error: 'red'
};

function log(level, message) {
  // Get the current date and time
  const timestamp = new Date().toLocaleString();

  // Colorize the log level and message based on the log level
  const levelColor = chalk[logLevels[level]];
  const messageColor = logLevels[level] === 'error' ? chalk.redBright : chalk.white;

  // Output the log message to the console with the timestamp and log level
  console.log(`[${timestamp}] [${levelColor(level.toUpperCase())}] ${messageColor(message)}`);
}
