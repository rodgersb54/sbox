# sportline
strives to be like a normal sports stopwatch
## How to use
```
npm install sportline
```

```js
var sportline = require('sportline');
var timer = new sportline.Stopwatch();

timer.start();
// ...do some stuff
var currentTime = timer.read();
// currentTime: "01:12 130" (minutes, seconds, and milliseconds)
var currentTimeMs = timer.readMs();
// currentTimeMs: 72131 (number of elapsed milliseconds)
// ...do some more stuff
timer.lap();
// ...do another lap
timer.stop();
timer.lap(); // this just lets you add the most recent interval to the laps array

var laps = timer.getLaps();
// laps: ["08:23 111", "08:30 803"]
var lapsMs = timer.getLapsMs();
// laps: [503111, 510803]
```
## Constructors
```js
var timer = new sportline.Stopwatch();
```

## Functions
### start
```js
timer.start();
```
### stop
Pauses timer.  Does not trigger an addition to the laps array.
```js
timer.stop();
```
### read
returns a string formatted like this: "00:00 000" (minuntes, seconds, milliseconds)
```js
var now = timer.read();
```
### readMs
returns the number of elapsed milliseconds
```js
var nowMs = timer.readMs();
```
### lap
inserts the most recent interval into the lap array.
```js
timer.lap();
```
### getLaps
returns an array of string-formated interval times
```js
var log = timer.getLaps();
```
### getLapsMs
returns an array of interval times in milliseconds
```js
var logMs = timer.getLapsMs();
```

## Future Development Ideas (feel free to contribute)
*add finisher array
*add countdown timer
*add string format options
*widgetize for use in browser.  be able to bind divs to hrs, mins, secs, and ms (or all of them) and spin up the numbers in real time.
