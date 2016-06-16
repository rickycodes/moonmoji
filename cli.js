#!/usr/bin/env node
'use strict'

const meow = require('meow')
const moonmoji = require('./')()
const cli = meow(require('./help'))

function output () {
  if (cli.flags.v || cli.flags.verbose) {
    console.log(Object.keys(moonmoji).map(function (k) {
      const key = k + ': '
      return k + ': ' + (k === 'emoji') ? key + moonmoji[k] + ' ' : key + moonmoji[k]
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
