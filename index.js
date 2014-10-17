var suncalc = require('suncalc');
var phase = suncalc.getMoonIllumination(new Date()).phase;

var phases = [
  { emoji: '🌑', name: 'New Moon' },
  { emoji: '🌒', name: 'Waxing Crescent' },
  { emoji: '🌓', name: 'First Quarter' },
  { emoji: '🌔', name: 'Waxing Gibbous' },
  { emoji: '🌕', name: 'Full Moon' },
  { emoji: '🌖', name: 'Waning Gibbous' },
  { emoji: '🌗', name: 'Last Quarter' },
  { emoji: '🌘', name: 'Waning Crescent' },
  { emoji: '🌚', name: 'New Moon *' },
  { emoji: '🌝', name: 'Full Moon *' }
];

stepPhase = function (phase, randomVal) {
  if (randomVal === undefined) {
    randomVal = 0.1;
  }
  var rv = Math.round(phase * 8) % 8;
  if (Math.random() <= randomVal && rv === 0) {
    rv = 8;
  } else if (Math.random() <= randomVal && rv === 4) {
    rv = 9;
  }
  return rv;
}

module.exports = function(){
  var phase = suncalc.getMoonIllumination(new Date()).phase;

  return phases[stepPhase(phase)];
};


function test() {
  for (var i = 1; i <= 31; i++) {
    var phase = suncalc.getMoonIllumination(new Date(2014, 9, i)).phase;
    console.log("2014-09-" + i, phases[stepPhase(phase, 1)]);
  };
}
