const suncalc = require('suncalc')
const phases = [
  { emoji: '🌚', code: ':new_moon_with_face:', name: 'New Moon', weight: 1 },
  { emoji: '🌒', code: ':waxing_crescent_moon:', name: 'Waxing Crescent', weight: 6.3825 },
  { emoji: '🌓', code: ':first_quarter_moon:', name: 'First Quarter', weight: 1 },
  { emoji: '🌔', code: ':waxing_gibbous_moon:', name: 'Waxing Gibbous', weight: 6.3825 },
  { emoji: '🌝', code: ':full_moon_with_face:', name: 'Full Moon', weight: 1 },
  { emoji: '🌖', code: ':waning_gibbous_moon:', name: 'Waning Gibbous', weight: 6.3825 },
  { emoji: '🌗', code: ':last_quarter_moon:', name: 'Last Quarter', weight: 1 },
  { emoji: '🌘', code: ':waning_crescent_moon:', name: 'Waning Crescent', weight: 6.3825 }
]

function stepPhase (phase, randomVal) {
  if (randomVal === undefined) {
    randomVal = 0.1
  }

  const weight = phases.reduce(function (a, b) {
    return a + b.weight
  }, 0)

  phase *= weight
  for (var rv = 0; rv < phases.length; rv++) {
    phase -= phases[rv].weight
    if (phase <= 0) {
      break
    }
  }

  return rv
}

module.exports = function (dateObj) {
  dateObj = dateObj || new Date()
  const phase = suncalc.getMoonIllumination(dateObj).phase
  return phases[stepPhase(phase)]
}
