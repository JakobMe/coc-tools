module.exports = {
  randomInteger: (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min,
  digitDifference: (a, b) => Math.abs(a.toString().length - b.toString().length)
};
