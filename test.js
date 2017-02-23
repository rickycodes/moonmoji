const test = require('tape')
const moonmoji = require('./')

test('no date object argument', function (t) {
  t.plan(1)
  const actual = moonmoji()
  const expected = moonmoji(new Date())
  t.deepEqual(actual, expected, actual.emoji + '  should return the moon for today')
})

test('🌒  should return correct for waxing crescent', function (t) {
  t.plan(1)
  // September 1st, 2014
  const moon = moonmoji(new Date(2014, 8, 1))
  t.deepEqual(
    moon,
    {
      name: 'Waxing Crescent',
      code: ':waxing_crescent_moon:',
      emoji: '🌒',
      weight: 6.3825
    }
  )
})

test('🌔  should return correct for waxing gibbous', function (t) {
  t.plan(1)
  // September 7th, 2014
  const moon = moonmoji(new Date(2014, 8, 7))
  t.deepEqual(
    moon,
    {
      name: 'Waxing Gibbous',
      code: ':waxing_gibbous_moon:',
      emoji: '🌔',
      weight: 6.3825
    }
  )
})

test('🌘  should return correct for waning crescent', function (t) {
  t.plan(1)
  // September 20th, 2014
  const moon = moonmoji(new Date(2014, 8, 20))
  t.deepEqual(
    moon,
    {
      name: 'Waning Crescent',
      code: ':waning_crescent_moon:',
      emoji: '🌘',
      weight: 6.3825
    }
  )
})
