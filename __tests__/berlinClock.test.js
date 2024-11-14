const getBerlinClockTime = require('../src/berlinClock');

test('00:00:00 doit afficher l\'horloge éteinte avec la lampe des secondes allumée', () => {
  expect(getBerlinClockTime('00:00:00')).toEqual([
    'Y',
    'OOOO',
    'OOOO',
    'OOOOOOOOOOO',
    'OOOO'
  ]);
});

test('23:59:59 doit afficher l\'horloge complète', () => {
  expect(getBerlinClockTime('23:59:59')).toEqual([
    'O',
    'RRRR',
    'RRRO',
    'YYRYYRYYRYY',
    'YYYY'
  ]);
});

test('12:32:00 doit afficher l\'heure correspondante', () => {
  expect(getBerlinClockTime('12:32:00')).toEqual([
    'Y',
    'RROO',
    'RROO',
    'YYRYYROOOOO',
    'YYOO'
  ]);
});
