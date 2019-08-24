const colors = require('colors');
const names = require('../data/names.json');

function pickRandomName(key, exclude = []) {
  const list = names[key].filter(item => !exclude.includes(item));
  const random = Math.floor(Math.random() * list.length);
  return list[random];
}

function mapGender(gender) {
  switch (gender) {
    case 'f':
    case 'female':
      return 'female';
    case 'm':
    case 'male':
      return 'male';
    default:
      return null;
  }
}

module.exports = function(gender, n = 1, options = { middle: false }) {
  const key = mapGender(gender.toLowerCase());

  if (!key) {
    console.error(colors.red("error: gender argument must be 'f', 'female', 'm' or 'male'"));
    return;
  }

  for (let i = 0; i < n; i++) {
    const first = pickRandomName(key);
    const result = [first, pickRandomName('last')];

    if (options.middle) {
      result.unshift(pickRandomName(key, [first]));
    }

    console.log(colors.green(result.join(' ')));
  }
};
