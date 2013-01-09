(function (B) {
  "use strict";
  var assert = buster.assert;

  buster.testCase("Converter", {
    "converts from decimal to binary numbers": function () {
      assert.equals(B.converter(5), 101);
    },

    "zero is still zero after being converted": function () {
      assert.equals(B.converter(0), 0);
    },

    "convert timestamp to binary time": function () {
      var timestamp = new Date(2013, 1, 1, 2, 3, 4);
      assert.equals(B.convertTime(timestamp), "10:11:100");
    }
  });

})(BinaryClock);
