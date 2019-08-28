const namesData = require('../data/names.json');
const terminal = require('../utility/terminal');
const arrays = require('../utility/arrays');
const strings = require('../utility/strings');

function getRandomName(gender, middleName = false) {
  const first = arrays.getRandomItem(namesData[gender]);
  const middle = arrays.getRandomItem(namesData[gender], [first]);
  const last = arrays.getRandomItem(namesData.last);
  const name = middleName ? [first, middle, last] : [first, last];
  return name.join(' ');
}

function buildOutput(amount, name) {
  if (amount > 1) {
    const output = i => strings.prefixWithNumber(name(), i, amount);
    return arrays.arrayFromNumber(amount).map(output);
  }
  return name();
}

function main(gender, number = 1, options = { middle: false }) {
  const amount = +number;

  if (!namesData[gender]) {
    return { result: null, error: 'gender' };
  }

  if (isNaN(amount) || amount < 1 || amount > 100) {
    return { result: null, error: 'number' };
  }

  return {
    result: buildOutput(amount, () => getRandomName(gender, options.middle)),
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

    if (error === 'number') {
      terminal.error('error: number must be a number between 1 and 100');
      return;
    }

    if (result) {
      terminal.log(result);
      return;
    }
  }
};
