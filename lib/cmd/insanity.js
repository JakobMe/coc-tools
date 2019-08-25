const arrays = require('../util/arrays');
const strings = require('../util/strings');
const terminal = require('../util/terminal');
const insanities = require('../data/insanities');

module.exports = function(options = { extended: false }) {
  const list = options.extended ? insanities.extended : insanities.default;
  const item = arrays.getRandomItem(list);
  terminal.log(strings.addLinebreaks(item));
};
