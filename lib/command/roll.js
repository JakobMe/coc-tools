const arrays = require('../utility/arrays');
const numbers = require('../utility/numbers');
const terminal = require('../utility/terminal');

function makeRoll() {
  const result = [numbers.randomInteger(9), numbers.randomInteger(9) * 10];
  return [...result, arrays.sumItems(result)];
}

function main() {
  const [d10, d100, sum] = makeRoll();
  return {
    result: `${d10} + ${d100} = ${sum}`,
    error: null
  };
}

module.exports = {
  main,
  execute: function() {
    const { result } = main.apply(null, arguments);
    terminal.log(result);
  }
};
