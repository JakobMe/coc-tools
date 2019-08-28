const numbers = require('./numbers');

function squeezeWord(line, word, width) {
  const newline = line ? `${line} ${word}` : word;
  const fits = newline.length <= width;
  return [fits, fits ? newline : line];
}

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
  },
  addLinebreaks: (text, width = 80) => {
    const words = text.replace(/\n/g, '').split(' ');
    const lines = words.reduce(
      (list, word) => {
        const i = list.length - 1;
        const [fits, newline] = squeezeWord(list[i], word, width);
        list[i] = newline;
        return fits ? list : list.concat(word);
      },
      ['']
    );
    return lines.join('\n');
  }
};
