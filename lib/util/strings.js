const numbers = require('../util/numbers');

module.exports = {
  prefixWithNumber: (text, number, max = 0) => {
    const repeat = max > number ? numbers.digitDifference(number, max) : 0;
    const spaces = ' '.repeat(repeat);
    return `${spaces}${number}. ${text}`;
  },
  padRight: (text, width, char = ' ') => {
    const length = text.length;
    const repeat = length < width ? width - length : 0;
    return `${text}${char.repeat(repeat)}`;
  }
};
