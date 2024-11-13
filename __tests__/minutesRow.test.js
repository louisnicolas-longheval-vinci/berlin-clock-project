const getMinutesRow = require('../src/minutesRow');

test('0 minute doit afficher OOOO', () => {
  expect(getMinutesRow(0)).toBe('OOOO');
});

test('1 minute doit afficher YOOO', () => {
  expect(getMinutesRow(1)).toBe('YOOO');
});

test('2 minutes doit afficher YYOO', () => {
  expect(getMinutesRow(2)).toBe('YYOO');
});

test('4 minutes doit afficher YYYY', () => {
  expect(getMinutesRow(4)).toBe('YYYY');
});
