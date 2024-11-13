const getFiveMinutesRow = require('../src/fiveMinutesRow');

test('0 minute doit afficher OOOOOOOOOOO', () => {
  expect(getFiveMinutesRow(0)).toBe('OOOOOOOOOOO');
});

test('5 minutes doit afficher YOOOOOOOOOO', () => {
  expect(getFiveMinutesRow(5)).toBe('YOOOOOOOOOO');
});

test('15 minutes doit afficher YYROOOOOOOO', () => {
  expect(getFiveMinutesRow(15)).toBe('YYROOOOOOOO');
});

test('30 minutes doit afficher YYRYYROOOOO', () => {
  expect(getFiveMinutesRow(30)).toBe('YYRYYROOOOO');
});

test('55 minutes doit afficher YYRYYRYYRYY', () => {
  expect(getFiveMinutesRow(55)).toBe('YYRYYRYYRYY');
});