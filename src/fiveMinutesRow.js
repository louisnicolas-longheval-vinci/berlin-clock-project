function getFiveMinutesRow(minutes) {
    const lamps = Array(11).fill('O');
    const onLamps = Math.floor(minutes / 5);
  
    for (let i = 0; i < onLamps; i++) {
      lamps[i] = (i + 1) % 3 === 0 ? 'R' : 'Y';
    }
  
    return lamps.join('');
  }
  
  module.exports = getFiveMinutesRow;