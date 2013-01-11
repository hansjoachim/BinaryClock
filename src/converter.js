var BinaryClock = {};

(function (B) {
  "use strict";

  //Returns a string containing the binary form of a number.
  //Always returns six characters (prepends smaller numbers with 0)
  //Example converter(2) -> "000010"
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
    var calculatedTime = B.convertTime(new Date());
    B.render(calculatedTime);
  }

  B.render = function (text) {
    document.getElementById('clock').innerHTML = text; 
  }

})(BinaryClock);

setInterval(function () {
  BinaryClock.tick()
}, 1000);

