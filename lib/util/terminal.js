const program = require('commander');
const colors = require('colors');

module.exports = {
  log: text => console.log(colors.green(text)),
  error: text => console.error(colors.red(text)),
  ignoreArgs: cmd => (...args) => cmd(args.find(arg => arg instanceof program.Command))
};
