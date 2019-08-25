const arrays = require('../util/arrays');
const numbers = require('../util/numbers');
const terminal = require('../util/terminal');

function makeRoll() {
  const result = [numbers.randomInteger(9), numbers.randomInteger(9) * 10];
  return [...result, arrays.sumItems(result)];
}

module.exports = function() {
  const [d10, d100, sum] = makeRoll();
  terminal.log(`${d10} + ${d100} = ${sum}`);
};
