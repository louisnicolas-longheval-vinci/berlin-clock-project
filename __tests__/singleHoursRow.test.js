const getSingleHoursRow = require('../src/singleHoursRow');

test('0 heure doit afficher OOOO', () => {
  expect(getSingleHoursRow(0)).toBe('OOOO');
});

test('1 heure doit afficher ROOO', () => {
  expect(getSingleHoursRow(1)).toBe('ROOO');
});

test('4 heures doit afficher RRRR', () => {
  expect(getSingleHoursRow(4)).toBe('RRRR');
});