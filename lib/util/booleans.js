const numbers = require('./numbers');

module.exports = {
  randomBoolean: () => !!numbers.randomInteger(1)
};
