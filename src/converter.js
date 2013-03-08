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

  /**
  * Prepends a number of zeros ('0') to any text to make sure it fills up the
  * minimum length.
  * Yes, this could be generalized a lot more and allow it to specify the
  * characther being padded, but it works for this use case.
  *
  * Parameters:
  * text - the text in question
  * number_of_characters - will prepend zeros until the text reaches this length
  */
  B.padWithZeros = function(text, number_of_characters) {
    while(text.length < number_of_characters) {
      text = "0" + text;
    }
    return text;
  }

  B.tick = function () {
    var currentTime = new Date();
    var calculatedTime = B.convertTime(currentTime);
    B.render(calculatedTime +
             "<p>" +
               currentTime.getHours() + ":" +
               currentTime.getMinutes() + ":" +
               currentTime.getSeconds() +
             "</p>");
  }

  B.render = function (text) {
    document.getElementById('clock').innerHTML = text; 
  }

})(BinaryClock);

setInterval(function () {
  BinaryClock.tick()
}, 1000);

