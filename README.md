![moonmoji](http://i.imgur.com/BnYRgMF.png)

# moonmoji

Return an emoji representing the current moon phase.

## CLI

```sh
$ npm install --global moonmoji
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
