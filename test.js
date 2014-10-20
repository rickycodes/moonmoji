'use strict';

var assert = require('assert');
var moonmoji = require('./');

describe('moonmoji', function(){
  describe('no date object argument', function(){
    it('should return the moon for today', function(){
      var actual = moonmoji();
      var expected = moonmoji(new Date());

      assert.deepEqual(actual, expected);
    });
  });

  describe('date object argument', function(){
    it('should return correct for waxing crescent', function() {
      // September 1st, 2014
      var moon = moonmoji(new Date(2014, 8, 1));

      assert.equal(moon.name, 'Waxing Crescent');
      assert.equal(moon.emoji, '🌒');
    });
    it('should return correct for waxing gibbous', function() {
      // September 7th, 2014
      var moon = moonmoji(new Date(2014, 8, 7));

      assert.equal(moon.name, 'Waxing Gibbous');
      assert.equal(moon.emoji, '🌔');
    });

    it('should return correct for waning crescent', function() {
      // September 20th, 2014
      var moon = moonmoji(new Date(2014, 8, 20));

      assert.equal(moon.name, 'Waning Crescent');
      assert.equal(moon.emoji, '🌘');
    });
  });
});
