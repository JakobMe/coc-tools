const numbers = require('../../lib/utility/numbers');

describe('utility/numbers', () => {
  let counter;

  beforeEach(() => {
    counter = [...Array(10000).keys()];
  });

  test('randomInteger should return a number between min and max', () => {
    const min = 2;
    const max = 9;
    const items = counter.map(() => numbers.randomInteger(max, min));
    expect(items.every(item => item <= max && item >= min)).toBe(true);
  });

  test('digitDifference should return correct value', () => {
    expect(numbers.digitDifference(1, 100)).toBe(2);
    expect(numbers.digitDifference(100, 1)).toBe(2);
    expect(numbers.digitDifference(10, 100)).toBe(1);
    expect(numbers.digitDifference(100, 10)).toBe(1);
    expect(numbers.digitDifference(100, 100)).toBe(0);
    expect(numbers.digitDifference('100', '100')).toBe(0);
    expect(numbers.digitDifference('1', '10')).toBe(1);
  });
});
