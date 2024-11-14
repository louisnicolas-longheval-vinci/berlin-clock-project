const getFiveHoursRow = require('../src/fiveHoursRow');

test('0 hours should display OOOO', () => {
  expect(getFiveHoursRow(0)).toBe('OOOO');
});

test('5 hours should display ROOO', () => {
  expect(getFiveHoursRow(5)).toBe('ROOO');
});

test('10 hours should display RROO', () => {
  expect(getFiveHoursRow(10)).toBe('RROO');
});

test('20 hours should display RRRR', () => {
  expect(getFiveHoursRow(20)).toBe('RRRR');
});