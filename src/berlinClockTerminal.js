const clc = require('cli-color');
const getBerlinClockTime = require('./berlinClock');

function displayBerlinClock(time) {
  const [secondsLamp, fiveHoursRow, singleHoursRow, fiveMinutesRow, minutesRow] = getBerlinClockTime(time);

  const displayLamp = (lamp) => {
    if (lamp === 'R') {
      return clc.bgRed('   ');
    } else if (lamp === 'Y') {
      return clc.bgYellow('   ');
    } else {
      return clc.bgBlackBright('   ');
    }
  };

  console.clear();
  console.log(clc.bold('Horloge de Berlin\n'));

  // Lampe des secondes
  console.log(`     ${displayLamp(secondsLamp)}     \n`);

  // Lignes des heures
  console.log(
    '  ' +
      fiveHoursRow
        .split('')
        .map(displayLamp)
        .join(' ') +
      '  \n'
  );
  console.log(
    '  ' +
      singleHoursRow
        .split('')
        .map(displayLamp)
        .join(' ') +
      '  \n'
  );

  // Lignes des minutes
  console.log(
    fiveMinutesRow
      .split('')
      .map((lamp, index) => {
        if (lamp === 'R') {
          return clc.bgRed('   ');
        } else if (lamp === 'Y') {
          return clc.bgYellow('   ');
        } else {
          return clc.bgBlackBright('   ');
        }
      })
      .join(' ')
  );
  console.log('\n')
  console.log(
    '  ' +
      minutesRow
        .split('')
        .map(displayLamp)
        .join(' ') +
      '  \n'
  );
  console.log(clc.bold(`Heure actuelle : ${time}`));
}
const updateClock = () => {
  const now = new Date();
  const timeString = now.toTimeString().split(' ')[0];
  displayBerlinClock(timeString);
};

setInterval(updateClock, 1000);

updateClock();