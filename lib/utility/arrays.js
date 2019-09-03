const numbers = require('./numbers');

module.exports = {
  getRandomItem: (arr, exclude = []) => {
    const candidates = arr.filter(item => !exclude.includes(item));
    return candidates[numbers.randomInteger(candidates.length - 1)];
  },
  sumItems: arr => arr.reduce((sum, item) => +sum + +item, 0),
  maxItemLength: arr => Math.max(...arr.map(item => item.length)),
  arrayFromNumber: (num, shift = 1) => [...Array(num).keys()].map(n => n + shift)
};
