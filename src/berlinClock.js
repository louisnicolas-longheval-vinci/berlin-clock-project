const getSecondsLamp = require('./secondsLamp');
const getFiveHoursRow = require('./fiveHoursRow');
const getSingleHoursRow = require('./singleHoursRow');
const getFiveMinutesRow = require('./fiveMinutesRow');
const getMinutesRow = require('./minutesRow');

function getBerlinClockTime(time) {
  const [hours, minutes, seconds] = time.split(':').map(Number);

  return [
    getSecondsLamp(seconds),
    getFiveHoursRow(hours),
    getSingleHoursRow(hours),
    getFiveMinutesRow(minutes),
    getMinutesRow(minutes)
  ];
}

module.exports = getBerlinClockTime;
