const getBerlinClockTime = require('../src/berlinClock');

test('00:00:00 should display clock turned off with seconds lamp on', () => {
  expect(getBerlinClockTime('00:00:00')).toEqual([
    'Y',
    'OOOO',
    'OOOO',
    'OOOOOOOOOOO',
    'OOOO'
  ]);
});

test('23:59:59 should display full clock', () => {
  expect(getBerlinClockTime('23:59:59')).toEqual([
    'O',
    'RRRR',
    'RRRO',
    'YYRYYRYYRYY',
    'YYYY'
  ]);
});

test('12:32:00 should display corresponding time', () => {
  expect(getBerlinClockTime('12:32:00')).toEqual([
    'Y',
    'RROO',
    'RROO',
    'YYRYYROOOOO',
    'YYYY'
  ]);
});
