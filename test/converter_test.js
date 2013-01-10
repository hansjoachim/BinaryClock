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

    "always prepend additional zeros to get consistent with": function () {
      var large_number = B.converter(59);
      var small_number = B.converter(1);
      assert.equals(small_number.length, large_number.length);
    },

    "convert timestamp to binary time": function () {
      var timestamp = new Date(2013, 1, 1, 2, 3, 4);
      assert.equals(B.convertTime(timestamp), "000010:000011:000100");
    }
  });

})(BinaryClock);
