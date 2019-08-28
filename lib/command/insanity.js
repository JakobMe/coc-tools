const arrays = require('../utility/arrays');
const strings = require('../utility/strings');
const terminal = require('../utility/terminal');
const insanitiesData = require('../data/insanities');

function main(options = { extended: false }) {
  const list = options.extended ? insanitiesData.extended : insanitiesData.default;
  const item = arrays.getRandomItem(list);
  return {
    result: strings.addLinebreaks(item),
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
