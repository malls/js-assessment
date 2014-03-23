if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        binaryNum = num.convertToBinary.split('').reverse().join('');
        return Number(binaryNum.slice(bit-1, bit));
    },

    base10: function(str) {

    },

    convertToBinary: function(num) {

    },

    multiply: function(a, b) {

    }
  };
});

