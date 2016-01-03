#!/usr/bin/env node
'use strict'

var meow = require('meow')
var moonmoji = require('./')()

var cli = meow({
  requireInput: false,
  help: [
    'Usage',
    '  moonmoji',
    '  => `🌗`',
    '',
    '  moonmoji -v',
    '  => `Last Quarter - 🌗`'
  ].join('\n')
})

if (cli.flags.v || cli.flags.verbose) {
  console.log(moonmoji.name, '-', moonmoji.emoji)
}

console.log(moonmoji.emoji)
