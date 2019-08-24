const number = require('./number');

module.exports = {
  getRandomItem: (arr, exclude = []) => {
    const candidates = arr.filter(item => !exclude.includes(item));
    return candidates[number.randomInteger(candidates.length - 1)];
  }
};
