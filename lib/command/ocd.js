const terminal = require('../utility/terminal');
const arrays = require('../utility/arrays');
const strings = require('../utility/strings');
const ocdsData = require('../data/ocds');

function main(options = { list: false }) {
  if (options.list) {
    return {
      error: null,
      result: ocdsData.map((item, i) => strings.prefixWithNumber(item, i + 1, ocdsData.length))
    };
  }

  return { result: arrays.getRandomItem(ocdsData), error: null };
}

module.exports = {
  main,
  execute: function() {
    const { result } = main.apply(null, arguments);
    terminal.log(result);
  }
};
