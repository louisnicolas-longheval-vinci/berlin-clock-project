function getSingleHoursRow(hours) {
    const lamps = ['O', 'O', 'O', 'O'];
    const onLamps = hours % 5;
  
    for (let i = 0; i < onLamps; i++) {
      lamps[i] = 'R';
    }
  
    return lamps.join('');
  }
  
  module.exports = getSingleHoursRow;