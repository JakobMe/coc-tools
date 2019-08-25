const names = require('../data/names.json');
const terminal = require('../util/terminal');
const arrays = require('../util/arrays');
const strings = require('../util/strings');

function getRandomName(gender, middleName = false) {
  const first = arrays.getRandomItem(names[gender]);
  const middle = arrays.getRandomItem(names[gender], [first]);
  const last = arrays.getRandomItem(names.last);
  const name = middleName ? [first, middle, last] : [first, last];
  return name.join(' ');
}

module.exports = function(gender, number = 1, options = { middle: false }) {
  const amount = +number;
  const name = () => getRandomName(gender, options.middle);

  if (!names[gender]) {
    terminal.error("error: gender must be 'male' or 'female'");
    return;
  }

  if (isNaN(amount) || amount < 1 || amount > 100) {
    terminal.error('error: number must be a number between 1 and 100');
    return;
  }

  if (amount === 1) {
    terminal.log(name());
    return;
  }

  for (let i = 1; i <= amount; i++) {
    terminal.log(strings.prefixWithNumber(name(), i, amount));
  }
};
