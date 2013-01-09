var BinaryClock = {};

(function (B) {
  "use strict";

  B.converter = function(number) {
    return number.toString(2);
  }

  B.convertTime = function(timestamp) {
    var hour = B.converter(timestamp.getHours());
    var minute = B.converter(timestamp.getMinutes());
    var second = B.converter(timestamp.getSeconds());
    return hour + ":" + minute + ":" + second;
  }

  B.tick = function () {
    document.getElementById('clock').innerHTML = B.convertTime(new Date());
  }

})(BinaryClock);

setInterval(function () {
  BinaryClock.tick()
}, 1000);

