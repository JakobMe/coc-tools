#!/usr/bin/env node
const program = require('commander');
const colors = require('colors');
const randomName = require('../lib/cmd/name');

program.version('0.0.1');

program
  .command('name <gender> [number]')
  .option('-m, --middle', 'add a random middle name', false)
  .description('Generate a number of random names for a specific gender')
  .action(randomName);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(text => colors.red(text));
}
