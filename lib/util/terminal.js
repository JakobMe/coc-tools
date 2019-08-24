const colors = require('colors');

module.exports = {
  log: text => console.log(colors.green(text)),
  error: text => console.error(colors.red(text))
};
