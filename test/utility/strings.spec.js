const strings = require('../../lib/utility/strings');

describe('utility/strings', () => {
  test('prefixWithNumber should create correct string', () => {
    expect(strings.prefixWithNumber('Test', 1)).toBe('1. Test');
    expect(strings.prefixWithNumber('Test', 3, 10)).toBe(' 3. Test');
    expect(strings.prefixWithNumber('Test', 28, 10)).toBe('28. Test');
    expect(strings.prefixWithNumber('Test', 8, 100)).toBe('  8. Test');
    expect(strings.prefixWithNumber('Test', 5, 5)).toBe('5. Test');
    expect(strings.prefixWithNumber('Test', 1028, 100)).toBe('1028. Test');
  });

  test('padRight should create correct string', () => {
    expect(strings.padRight('Test', 10)).toBe('Test      ');
    expect(strings.padRight('Test', 2)).toBe('Test');
    expect(strings.padRight('Test', 7, '_')).toBe('Test___');
  });

  test('addLineBreaks should create correct string', () => {
    const text = 'Lorem ipsum dolor sit amet consetetur sadipcing elitr.';
    const result1 = strings.addLinebreaks(text, 20);
    const result2 = strings.addLinebreaks(text, 30);
    const result3 = strings.addLinebreaks(text, 50);
    const result4 = strings.addLinebreaks(text, 2);
    const result5 = strings.addLinebreaks(text);
    expect(result1).toBe('Lorem ipsum dolor\nsit amet consetetur\nsadipcing elitr.');
    expect(result2).toBe('Lorem ipsum dolor sit amet\nconsetetur sadipcing elitr.');
    expect(result3).toBe('Lorem ipsum dolor sit amet consetetur sadipcing\nelitr.');
    expect(result4).toEqual('Lorem\nipsum\ndolor\nsit\namet\nconsetetur\nsadipcing\nelitr.');
    expect(result5).toBe(text);
  });
});
