#!/usr/bin/env node
const program = require('commander');
const colors = require('colors');
const package = require('../package');
const terminal = require('../lib/util/terminal');
const name = require('../lib/cmd/name');
const phobia = require('../lib/cmd/phobia');

program.version(package.version);

program
  .command('name <gender> [number]')
  .option('-m, --middle', 'add a random middle name', false)
  .description('Generate a number of random names for a specific gender')
  .action(name);

program
  .command('phobia')
  .option('-l, --list', 'show complete list of all phobias', false)
  .description('Pick a random phobia or show a list of all phobias')
  .action(terminal.ignoreArgs(phobia));

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(text => colors.red(text));
}
