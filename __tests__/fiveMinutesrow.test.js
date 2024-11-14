const getFiveMinutesRow = require('../src/fiveMinutesRow');

test('0 minute should display OOOOOOOOOOO', () => {
  expect(getFiveMinutesRow(0)).toBe('OOOOOOOOOOO');
});

test('5 minutes should display YOOOOOOOOOO', () => {
  expect(getFiveMinutesRow(5)).toBe('YOOOOOOOOOO');
});

test('15 minutes should display YYROOOOOOOO', () => {
  expect(getFiveMinutesRow(15)).toBe('YYROOOOOOOO');
});

test('30 minutes should display YYRYYROOOOO', () => {
  expect(getFiveMinutesRow(30)).toBe('YYRYYROOOOO');
});

test('55 minutes should display YYRYYRYYRYY', () => {
  expect(getFiveMinutesRow(55)).toBe('YYRYYRYYRYY');
});