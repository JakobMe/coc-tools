const arrays = require('../../lib/utility/arrays');

describe('utility/arrays', () => {
  let counter;
  let strings;
  let numbers;

  beforeEach(() => {
    counter = [...Array(100).keys()];
    numbers = [5, 17, 23, 9, 2, 7, 12];
    strings = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consetetur'];
  });

  test('getRandomItem should return item of original array', () => {
    const items = counter.map(() => arrays.getRandomItem(strings));
    expect(items.every(item => strings.indexOf(item) >= 0)).toBe(true);
  });

  test('getRandomItem should not return item of excluded array', () => {
    const excluded = strings.slice(0, 2);
    const items = counter.map(() => arrays.getRandomItem(strings, excluded));
    expect(items.every(item => excluded.indexOf(item) < 0)).toBe(true);
  });

  test('sumItems should calculate the correct sum of numbers', () => {
    const sum = arrays.sumItems(numbers);
    expect(sum).toBe(75);
  });

  test('sumItems should calculate NaN from an array of strings', () => {
    const sum = arrays.sumItems(strings);
    expect(sum).toBe(NaN);
  });

  test('maxItemLength should calculate the correct length', () => {
    const max = arrays.maxItemLength(strings);
    expect(max).toBe(10);
  });

  test('arrayFromNumber should create the correct array', () => {
    const arr1 = arrays.arrayFromNumber(5);
    const arr2 = arrays.arrayFromNumber(3, 10);
    expect(arr1).toEqual([1, 2, 3, 4, 5]);
    expect(arr2).toEqual([10, 11, 12]);
  });
});
