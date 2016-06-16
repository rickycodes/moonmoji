/* global it describe */
'use strict'

var assert = require('assert')
var moonmoji = require('./')

describe('moonmoji', function () {
  describe('no date object argument', function () {
    var actual = moonmoji()
    var expected = moonmoji(new Date())
    it(actual.emoji + '  should return the moon for today', function () {
      assert.deepEqual(actual, expected)
    })
  })

  describe('date object argument', function () {
    it('🌒  should return correct for waxing crescent', function () {
      // September 1st, 2014
      var moon = moonmoji(new Date(2014, 8, 1))

      assert.deepEqual(moon.name, 'Waxing Crescent')
      assert.deepEqual(moon.code, ':waxing_crescent_moon:')
      assert.deepEqual(moon.emoji, '🌒')
    })

    it('🌔  should return correct for waxing gibbous', function () {
      // September 7th, 2014
      var moon = moonmoji(new Date(2014, 8, 7))

      assert.deepEqual(moon.name, 'Waxing Gibbous')
      assert.deepEqual(moon.code, ':waxing_gibbous_moon:')
      assert.deepEqual(moon.emoji, '🌔')
    })

    it('🌘  should return correct for waning crescent', function () {
      // September 20th, 2014
      var moon = moonmoji(new Date(2014, 8, 20))

      assert.deepEqual(moon.name, 'Waning Crescent')
      assert.deepEqual(moon.code, ':waning_crescent_moon:')
      assert.deepEqual(moon.emoji, '🌘')
    })
  })
})
