function getSecondsLamp(seconds) {
    return seconds % 2 === 0 ? 'Y' : 'O';
  }
  
  module.exports = getSecondsLamp;