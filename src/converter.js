var BinaryClock = {};

(function (B) {
  "use strict";

  /**
  * Returns a string containing the binary form of a number.
  * Always returns six characters (prepends smaller numbers with 0)
  * Example converter(2) -> "000010"
  */
  B.converter = function(number) {
    var binary = number.toString(2);
    return B.padWithZeros(binary, 6); 
  }

  B.convertTime = function(timestamp) {
    var hour = B.converter(timestamp.getHours());
    var minute = B.converter(timestamp.getMinutes());
    var second = B.converter(timestamp.getSeconds());
    return hour + ":" + minute + ":" + second;
  }

  /**
  * Returns a string with the number in question prepended with a number of
  * zeros ('0') to any text to make sure it fills up the minimum length.
  * Yes, this could be generalized a lot more and allow it to specify the
  * characther being padded, but it works for this use case.
  *
  * Parameters:
  * number - some number
  * number_of_characters - will prepend zeros until the text reaches this length
  */
  B.padWithZeros = function(number, number_of_characters) {
    //I don't like to convert it right away, but then I don't have to do it
    //x different places outside the method. Probably not ideal...
    var text = number.toString();
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
               B.padWithZeros(currentTime.getHours(), 2) + ":" +
               B.padWithZeros(currentTime.getMinutes(), 2) + ":" +
               B.padWithZeros(currentTime.getSeconds(), 2) +
             "</p>");
  }

  B.render = function (text) {
    document.getElementById('clock').innerHTML = text; 
  }

})(BinaryClock);

setInterval(function () {
  BinaryClock.tick()
}, 1000);

