function getMinutesRow(minutes) {
    const lamps = ['O', 'O', 'O', 'O'];
    const onLamps = minutes % 5;
  
    for (let i = 0; i < onLamps; i++) {
      lamps[i] = 'Y';
    }
  
    return lamps.join('');
  }
  
  module.exports = getMinutesRow;
  