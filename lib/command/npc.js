const arrays = require('../utility/arrays');
const strings = require('../utility/strings');
const booleans = require('../utility/booleans');
const terminal = require('../utility/terminal');
const npcsData = require('../data/npcs.json');
const nameCommand = require('./name');

function getAllProps() {
  return ['Name', 'Geschlecht', ...Object.keys(npcsData.props)];
}

function getRandomName(gender) {
  return nameCommand.main(gender, 1, { middle: booleans.randomBoolean() }).result;
}

function getRandomValue(prop, gender) {
  const options = npcsData.props[prop];
  return arrays.getRandomItem(options[gender] || options.all);
}

function format(prop, value) {
  const width = arrays.maxItemLength(getAllProps()) + 4;
  return strings.padRight(`${prop}:`, width) + value;
}

function getValueForProp(prop, gender, name) {
  switch (prop) {
    case 'Name':
      return format(prop, name);
    case 'Geschlecht':
      return format(prop, npcsData.genders[gender]);
    default:
      return format(prop, getRandomValue(prop, gender));
  }
}

function getResult(gender) {
  const name = getRandomName(gender);
  return {
    name,
    result: getAllProps()
      .map(prop => getValueForProp(prop, gender, name))
      .filter(line => !line.includes('undefined'))
  };
}

function main(gender) {
  const allowed = Object.keys(npcsData.genders);
  gender = gender || arrays.getRandomItem(allowed);

  if (!allowed.includes(gender)) {
    return { result: null, error: 'gender' };
  }

  const { result } = getResult(gender);
  return {
    result,
    error: null
  };
}

module.exports = {
  main,
  execute: function() {
    const { result, error } = main.apply(null, arguments);

    if (error === 'gender') {
      terminal.error("error: gender must be 'male' or 'female'");
      return;
    }

    if (result) {
      terminal.log(result);
      return;
    }
  }
};
