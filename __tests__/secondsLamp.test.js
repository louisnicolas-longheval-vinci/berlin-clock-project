const getSecondsLamp = require('../src/secondsLamp');

test('Even seconds should display Y', () => {
  expect(getSecondsLamp(0)).toBe('Y');
  expect(getSecondsLamp(2)).toBe('Y');
});

test('Odd seconds should display O', () => {
  expect(getSecondsLamp(1)).toBe('O');
  expect(getSecondsLamp(3)).toBe('O');
});