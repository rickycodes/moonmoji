moonmoji [![Build Status](https://api.travis-ci.org/rmillr/moonmoji.svg?branch=master)](https://travis-ci.org/rmillr/moonmoji/)
========
Return an emoji representing the current moon phase.

Install
------------
```sh
$ npm install --save moonmoji
```

Usage
-----
```js
var moonmoji = require('moonmoji')();

console.log(moonmoji);
// => { emoji: '🌗', name: 'Last Quarter' }
```

CLI
---
```sh
$ npm install --global moonmoji
```

```sh
$ moonmoji --help

  Return an emoji representing the current moon phase.

  Usage
    moonmoji
    => `🌗`

    moonmoji -v
    => `Last Quarter - 🌗`
```

In your bash
------------
The main goal of this was to have the emoji display in a shell. This can be accomplished by adding the script to your `PS1` export in your `.bash_profile` or similar, eg:

`PS1=$(moonmoji);`
`export PS1;`

Example:

![shell](http://i.imgur.com/NiWPceH.png)

* note: If you have additional information in your `PS1` you'll need to have two spaces after the emoji character.

Thanks
------

[@lauradegroot](https://github.com/lauradegroot) for inspiration  
[@bwinton](https://github.com/bwinton) for pretty much authoring the whole thing  
The whole [meatspace](https://chat.meatspac.es/) community for being awesome.
