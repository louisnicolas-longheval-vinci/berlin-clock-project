const getSecondsLamp = require('../src/secondsLamp');

test('Secondes paires doivent afficher Y', () => {
  expect(getSecondsLamp(0)).toBe('Y');
  expect(getSecondsLamp(2)).toBe('Y');
});

test('Secondes impaires doivent afficher O', () => {
  expect(getSecondsLamp(1)).toBe('O');
  expect(getSecondsLamp(3)).toBe('O');
});