const getSingleHoursRow = require('../src/singleHoursRow');

test('0 hours should display OOOO', () => {
  expect(getSingleHoursRow(0)).toBe('OOOO');
});

test('1 hour should display ROOO', () => {
  expect(getSingleHoursRow(1)).toBe('ROOO');
});

test('4 hours should display RRRR', () => {
  expect(getSingleHoursRow(4)).toBe('RRRR');
});