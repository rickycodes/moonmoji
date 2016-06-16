#!/usr/bin/env node
'use strict'

const meow = require('meow')
const moonmoji = require('./')()
const version = require('./package.json').version

const cli = meow({
  requireInput: false,
  help: [
    'Usage',
    '  moonmoji',
    '  => 🌗',
    '',
    '  moonmoji --verbose',
    '  => 🌔',
    '  => :waxing_gibbous_moon:',
    '  => Waxing Gibbous',
    '  => 6.3825',
    '',
    '  moonmoji --code',
    '  => :new_moon_with_face:',
    '',
    '  moonmoji --version',
    '  => ' + version
  ].join('\n')
})

function output () {
  if (cli.flags.v || cli.flags.verbose) {
    console.log(Object.keys(moonmoji).map(function (k) {
      return (k === 'emoji') ? moonmoji[k] + ' ' : moonmoji[k]
    }).join('\n'))
    return
  }

  if (cli.flags.c || cli.flags.code) {
    console.log(moonmoji.code)
    return
  }

  if (cli.flags.d || cli.flags.demo) {
    for (let i = 1; i < 31; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      console.log(require('./')(date))
    }
    return
  }

  console.log(moonmoji.emoji)
}

output()
