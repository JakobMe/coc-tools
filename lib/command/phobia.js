const terminal = require('../utility/terminal');
const arrays = require('../utility/arrays');
const strings = require('../utility/strings');
const phobiasData = require('../data/phobias');

function main(options = { list: false }) {
  if (options.list) {
    return {
      error: null,
      result: phobiasData.map((item, i) =>
        strings.prefixWithNumber(item, i + 1, phobiasData.length)
      )
    };
  }

  return { result: arrays.getRandomItem(phobiasData), error: null };
}

module.exports = {
  main,
  execute: function() {
    const { result } = main.apply(null, arguments);
    terminal.log(result);
  }
};
