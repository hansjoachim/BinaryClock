buster.testCase("Converter", {
  "converts from decimal to binary numbers": function () {
    assert.equals(converter(5), 101);
  },

  "zero is still zero after being converted": function () {
    assert.equals(converter(0), 0);
  },

  "convert timestamp to binary time": function () {
    timestamp = new Date(2013, 1, 1, 2, 3, 4);
    assert.equals(convertTime(timestamp), "10:11:100");
  }  
});
