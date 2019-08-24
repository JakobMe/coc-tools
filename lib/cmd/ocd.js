const terminal = require('../util/terminal');
const arrays = require('../util/arrays');
const strings = require('../util/strings');
const ocds = require('../../data/ocds');

module.exports = function(options = { list: false }) {
  if (options.list) {
    ocds.forEach((ocd, i) => {
      terminal.log(strings.prefixWithNumber(ocd, i + 1, ocds.length));
    });
    return;
  }

  terminal.log(arrays.getRandomItem(ocds));
};
