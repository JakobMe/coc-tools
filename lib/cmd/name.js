const names = require('../../data/names.json');
const terminal = require('../util/terminal');
const array = require('../util/array');

function getRandomName(gender, middleName = false) {
  const first = array.getRandomItem(names[gender]);
  const middle = array.getRandomItem(names[gender], [first]);
  const last = array.getRandomItem(names.last);
  const name = middleName ? [first, middle, last] : [first, last];
  return name.join(' ');
}

module.exports = function(gender, amount = 1, options = { middle: false }) {
  if (!names[gender]) {
    terminal.error("error: gender argument must be 'male' or 'female'");
    return;
  }

  for (let i = 0; i < amount; i++) {
    terminal.log(getRandomName(gender, options.middle));
  }
};
