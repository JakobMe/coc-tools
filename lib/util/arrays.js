const numbers = require('./numbers');

module.exports = {
  getRandomItem: (arr, exclude = []) => {
    const candidates = arr.filter(item => !exclude.includes(item));
    return candidates[numbers.randomInteger(candidates.length - 1)];
  }
};
