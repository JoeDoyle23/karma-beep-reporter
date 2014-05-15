# karma-beep-reporter

> A 3rd party Karma reporter that beeps when there are failed tests. It's designed to work with other visual reporters

## Installation

The easiest way is to keep `karma-beep-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": ">=0.10",
    "karma-beep-reporter": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-beep-reporter -g --save-dev
```

## Configuration
You need to add it to the list of reporters:
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'beep'],
  });
};
```

And you need to register the plugin as well:
```js
plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-beep-reporter'
        ],
```

You can pass list of reporters as a CLI argument too:
```bash
karma start --reporters beep,dots
```

----

For more information on Karma see the [homepage].

Change Log
==========
* 0.1.4 - Fixed issue with incorrect formatting of the Kamra output when common messages (ex: console.log) were displayed
* 0.1.3 - Changed Karma dependancy to allow for v0.10 & v0.12
* 0.1.2 - Fixed bug where failed tests were being displayed multiple times. (Bradley C Bailey <bcbailey@godaddy.com>)

License
=======
karma-beep-reporter is MIT licensed.


[homepage]: http://karma-runner.github.com