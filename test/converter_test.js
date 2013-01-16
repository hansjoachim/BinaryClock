(function (B) {
  "use strict";
  var assert = buster.assert;

  buster.testCase("Converter", {
    "converts from decimal to binary numbers": function () {
      assert.equals(B.converter(5), "000101");
    },

    "zero is still zero after being converted": function () {
      assert.equals(B.converter(0), "000000");
    },
 
    "converted number is returned as a string": function () {
      var number = B.converter(3);
      assert.equals(typeof number, "string");
    },

    "always prepend additional zeros to get consistent with": function () {
      var large_number = B.converter(59);
      var small_number = B.converter(1);
      assert.equals(small_number.length, large_number.length);
    },

    "convert timestamp to binary time": function () {
      var timestamp = new Date(2013, 1, 1, 2, 3, 4);
      assert.equals(B.convertTime(timestamp), "000010:000011:000100");
    },

    "renders a specific text on the page": function () {
      //TODO: move out some of all this setup, and/or split the tests into multiple files
      var clock = document.createElement("div");
      clock.id = "clock";
      document.body.appendChild(clock);

      B.render("hello world");
      assert.equals(clock.innerHTML, "hello world");
    },

    "tick should ensure the calculated time is rendered": function () {
      var clock = document.createElement("div");
      clock.id = "clock";
      document.body.appendChild(clock);
      this.stub(B, "render");

      B.tick();
      assert.calledOnce(B.render);
    },

    //TODO: find some better strategy to ensure we get the expected text.
    //Could check the format with regexp, but that sounds messy.
    //Since it calculates time, we could mock the current time in some
    //way since otherwise it won't have a consistent expected value. 

    "tick should write the current time on the page": function () {
      var clock = document.createElement("div");
      clock.id = "clock";
      document.body.appendChild(clock);

      B.tick();
      assert(clock.innerHTML.indexOf(":") > 0);
   },

   "Ensure the display includes a paragraph with the time in normal style": function () {
      var clock = document.createElement("div");
      clock.id = "clock";
      document.body.appendChild(clock);

      B.tick();
      assert(clock.innerHTML.indexOf("<p>") > 0);
    }

  });

})(BinaryClock);
