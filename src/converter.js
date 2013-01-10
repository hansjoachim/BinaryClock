var BinaryClock = {};

(function (B) {
  "use strict";

  //Returns the binary form of a number.
  //Always returns six characters (prepends smaller numbers with 0)
  B.converter = function(number) {
    var rv = "000000" + number.toString(2);
    
    return rv.substring(rv.length - 6);
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

