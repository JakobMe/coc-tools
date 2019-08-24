#!/usr/bin/env node
const program = require('commander');
const randomName = require('../lib/random-name');

program.version('0.0.1');

program
  .command('random-name <gender> [amount]')
  .option('-m, --middle', 'add a random middle name', false)
  .description('Generate a random name for your NPC')
  .action(randomName);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
