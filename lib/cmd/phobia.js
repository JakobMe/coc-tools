const terminal = require('../util/terminal');
const arrays = require('../util/arrays');
const strings = require('../util/strings');
const phobias = require('../../data/phobias');

module.exports = function(options = { list: false }) {
  if (options.list) {
    phobias.forEach((phobia, i) => {
      terminal.log(strings.prefixWithNumber(phobia, i + 1, phobias.length));
    });
    return;
  }

  terminal.log(arrays.getRandomItem(phobias));
};
