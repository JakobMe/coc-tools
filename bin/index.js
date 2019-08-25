#!/usr/bin/env node
const program = require('commander');
const colors = require('colors');
const package = require('../package');
const terminal = require('../lib/util/terminal');
const name = require('../lib/cmd/name');
const npc = require('../lib/cmd/npc');
const phobia = require('../lib/cmd/phobia');
const ocd = require('../lib/cmd/ocd');
const roll = require('../lib/cmd/roll');

program.version(package.version);

program
  .command('name <gender> [number]')
  .option('-m, --middle', 'add a random middle name', false)
  .description('Generate a number of random names for a specific gender')
  .action(name);

program
  .command('npc [gender]')
  .description('Generate a random npc description')
  .action(npc);

program
  .command('phobia')
  .option('-l, --list', 'show complete list of all phobias', false)
  .description('Pick a random phobia or show a complete list')
  .action(terminal.ignoreArgs(phobia));

program
  .command('ocd')
  .option('-l, --list', 'show complete list of all obsessive-compulsive disorders', false)
  .description('Pick a random obsessive-compulsive disorder or show a complete list')
  .action(terminal.ignoreArgs(ocd));

program
  .command('roll')
  .description('Make a combined d10 + d100 roll')
  .action(terminal.ignoreArgs(roll));

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(text => colors.red(text));
}
