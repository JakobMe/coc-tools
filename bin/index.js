#!/usr/bin/env node
const program = require('commander');
const colors = require('colors');
const package = require('../package');
const terminal = require('../lib/utility/terminal');
const nameCommand = require('../lib/command/name');
const npcCommand = require('../lib/command/npc');
const phobiaCommand = require('../lib/command/phobia');
const ocdCommand = require('../lib/command/ocd');
const rollCommand = require('../lib/command/roll');
const insanityCommand = require('../lib/command/insanity');

program
  .command('name <gender> [number]')
  .option('-m, --middle', 'add a random middle name', false)
  .description('Generate a number of random names for a specific gender')
  .action(nameCommand.execute);

program
  .command('npc [gender]')
  .description('Generate a random npc description')
  .action(npcCommand.execute);

program
  .command('phobia')
  .option('-l, --list', 'show complete list of all phobias', false)
  .description('Pick a random phobia or show a complete list')
  .action(terminal.ignoreArgs(phobiaCommand.execute));

program
  .command('ocd')
  .option('-l, --list', 'show complete list of all obsessive-compulsive disorders', false)
  .description('Pick a random obsessive-compulsive disorder or show a complete list')
  .action(terminal.ignoreArgs(ocdCommand.execute));

program
  .command('roll')
  .description('Make a combined d10 + d100 roll')
  .action(terminal.ignoreArgs(rollCommand.execute));

program
  .command('insanity')
  .option('-e, --extended', 'use list of extended insanities', false)
  .description('Pick a random insanity')
  .action(terminal.ignoreArgs(insanityCommand.execute));

program.version(package.version);
program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(text => colors.red(text));
}
