const booleans = require('../../lib/utility/booleans');

describe('utility/booleans', () => {
  let counter;
  let confidence;

  beforeEach(() => {
    counter = [...Array(10000).keys()];
    confidence = 0.98;
  });

  test('randomBoolean should return a boolean', () => {
    const items = counter.map(() => booleans.randomBoolean());
    expect(items.every(item => typeof item === 'boolean')).toBe(true);
  });

  test('randomBoolean should generate approximately 50:50 true/false', () => {
    const items = counter.map(() => booleans.randomBoolean()).filter(i => !!i);
    const expected = counter.length / 2;
    const error = expected * (1 - confidence);
    expect(items.length).toBeGreaterThanOrEqual(expected - error);
    expect(items.length).toBeLessThanOrEqual(expected + error);
  });
});
