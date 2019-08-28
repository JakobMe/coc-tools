const arrays = require('../utility/arrays');
const strings = require('../utility/strings');
const booleans = require('../utility/booleans');
const terminal = require('../utility/terminal');
const files = require('../utility/files');
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

function getNameFromFile(file) {
  return files
    .txtToArray(file)
    .find(line => line.includes('Name:'))
    .replace('Name:', '')
    .trim();
}

function main(gender, options = { save: false }) {
  const allowed = Object.keys(npcsData.genders);
  gender = gender || arrays.getRandomItem(allowed);

  if (!allowed.includes(gender)) {
    return { result: null, save: false, error: 'gender' };
  }

  if (options.save) {
    const file = files.read();
    return {
      result: file,
      save: true,
      error: file ? null : 'save'
    };
  }

  return {
    result: getResult(gender).result,
    save: false,
    error: null
  };
}

module.exports = {
  main,
  execute: function() {
    const { result, save, error } = main.apply(null, arguments);

    if (error === 'gender') {
      terminal.error("error: gender must be 'male' or 'female'");
      return;
    }

    if (error === 'save') {
      terminal.error('error: no prior generated npc found');
      return;
    }

    if (save) {
      const name = getNameFromFile(result);
      const file = files.move(name);
      terminal.log(file);
      return;
    }

    if (result) {
      terminal.log(result);
      files.save(files.arrayToTxt(result));
      return;
    }
  }
};
