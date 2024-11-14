const getFiveHoursRow = require('../src/fiveHoursRow');

test('0 heure doit afficher OOOO', () => {
  expect(getFiveHoursRow(0)).toBe('OOOO');
});

test('5 heures doit afficher ROOO', () => {
  expect(getFiveHoursRow(5)).toBe('ROOO');
});

test('10 heures doit afficher RROO', () => {
  expect(getFiveHoursRow(10)).toBe('RROO');
});

test('20 heures doit afficher RRRR', () => {
  expect(getFiveHoursRow(20)).toBe('RRRR');
});