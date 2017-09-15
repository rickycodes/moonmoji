![moonmoji](http://i.imgur.com/BnYRgMF.png)

# moonmoji

[![NPM](https://nodei.co/npm/moonmoji.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/moonmoji/)

[![NPM](https://nodei.co/npm-dl/moonmoji.png?height=3)](https://nodei.co/npm/moonmoji/)

[![build status](https://api.travis-ci.org/rickycodes/moonmoji.svg?branch=master)](https://travis-ci.org/rickycodes/moonmoji/) 
[![dependency status](https://david-dm.org/rickycodes/moonmoji.svg)](https://david-dm.org/rickycodes/moonmoji) 
[![devDependency status](https://david-dm.org/rickycodes/moonmoji/dev-status.svg)](https://david-dm.org/rickycodes/moonmoji#info=devDependencies) 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) 
[![npm-version](https://img.shields.io/npm/v/moonmoji.svg?style=flat)](https://www.npmjs.com/package/moonmoji) 
[![npm-downloads](https://img.shields.io/npm/dm/moonmoji.svg?style=flat)](https://www.npmjs.com/package/moonmoji)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

---

Return an emoji representing the current moon phase.

## Install

```sh
$ npm install --save moonmoji
```

## Usage

```js
var moonmoji = require('moonmoji')();

console.log(moonmoji);
// => { emoji: '🌗', name: 'Last Quarter' }
```

## CLI

```sh
$ npm install --global moonmoji
```

```sh
$ moonmoji --help

  Return an emoji representing the current moon phase.

  Usage
    moonmoji
    => 🌗

    moonmoji --verbose
    => { emoji: '🌔',
    =>   code: ':waxing_gibbous_moon:',
    =>   name: 'Waxing Gibbous',
    =>   weight: 6.3825 }

    moonmoji --code
    => :new_moon_with_face:

    moonmoji --version
    => 1.1.2
```

## In your bash

The main goal of this was to have the emoji display in a shell. This can be accomplished by adding the script to your `PS1` export in your `.bash_prompt` or similar, eg:

```sh
PS1=$(moonmoji);
export PS1;
```

Examples:

![prompt 1](http://i.imgur.com/aTrVySn.png) ![prompt 2](http://i.imgur.com/UcGwk6F.png)

* note: If you have additional information in your `PS1` you'll need to have two spaces after the emoji character.

## Thanks

[@lauradegroot](https://github.com/lauradegroot) for inspiration  
[@bwinton](https://github.com/bwinton) for pretty much authoring the whole thing  
[@matiassingers](https://github.com/matiassingers) for tests!  
The whole [meatspace](https://chat.meatspac.es/) community for being awesome.

## Licence

MIT
