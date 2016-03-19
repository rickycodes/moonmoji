#!/usr/bin/env node
'use strict'

var meow = require('meow')
var moonmoji = require('./')()
var version = require('./package.json').version

var cli = meow({
  requireInput: false,
  help: [
    'Usage',
    '  moonmoji',
    '  => `🌗`',
    '',
    '  moonmoji --verbose',
    '  => `Last Quarter - 🌗`',
    '',
    '  moonmoji --version',
    '  => ' + version
  ].join('\n')
})

function output () {
  if (cli.flags.v || cli.flags.verbose) {
    console.log(moonmoji.name, '-', moonmoji.emoji)
    return
  }

  if (cli.flags.d || cli.flags.demo) {
    for (var i = 1; i < 31; i++) {
      var date = new Date()
      date.setDate(date.getDate() + i)
      console.log(require('./')(date))
    }
    return
  }

  console.log(moonmoji.emoji)
}

output()
