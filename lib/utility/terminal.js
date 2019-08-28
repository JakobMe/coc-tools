const program = require('commander');
const colors = require('colors');

module.exports = {
  error: text => console.error(colors.red(text)),
  blank: () => console.log(''),
  ignoreArgs: cmd => (...args) => cmd(args.find(arg => arg instanceof program.Command)),
  log: text =>
    Array.isArray(text)
      ? text.forEach(t => console.log(colors.green(t)))
      : console.log(colors.green(text))
};
