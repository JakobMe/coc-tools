const arrays = require('../util/arrays');
const strings = require('../util/strings');
const booleans = require('../util/booleans');
const terminal = require('../util/terminal');
const npcs = require('../data/npcs.json');
const name = require('../cmd/name');

function getPropWidth(extra = 4) {
  const props = Object.keys(npcs.props).concat('Geschlecht');
  return arrays.maxItemLength(props) + extra;
}

function printProp(prop, value, width) {
  terminal.log(strings.padRight(`${prop}:`, width) + value);
}

function getRandomProp(prop, gender) {
  const options = npcs.props[prop];
  return arrays.getRandomItem(options[gender] || options.all);
}

function logGender(gender) {
  printProp('Geschlecht', npcs.genders[gender], getPropWidth());
}

function logProps(gender) {
  Object.keys(npcs.props).forEach(prop => {
    const value = getRandomProp(prop, gender);
    if (value) {
      printProp(prop, value, getPropWidth());
    }
  });
}

module.exports = function(gender) {
  const allowed = Object.keys(npcs.genders);
  gender = gender || arrays.getRandomItem(allowed);

  if (!allowed.includes(gender)) {
    terminal.error("error: gender must be 'male' or 'female'");
    return;
  }

  name(gender, 1, { middle: booleans.randomBoolean() });
  terminal.blank();
  logGender(gender);
  logProps(gender);
};
