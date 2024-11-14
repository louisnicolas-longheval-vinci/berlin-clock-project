const getMinutesRow = require('../src/minutesRow');

test('0 minute should display OOOO', () => {
  expect(getMinutesRow(0)).toBe('OOOO');
});

test('1 minute should display YOOO', () => {
  expect(getMinutesRow(1)).toBe('YOOO');
});

test('2 minutes should display YYOO', () => {
  expect(getMinutesRow(2)).toBe('YYOO');
});

test('4 minutes should display YYYY', () => {
  expect(getMinutesRow(4)).toBe('YYYY');
});