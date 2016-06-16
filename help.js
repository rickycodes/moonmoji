const version = require('./package.json').version

module.exports = {
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
}
