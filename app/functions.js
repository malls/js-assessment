if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
       return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
        
    },

    functionFunction : function(str) {
        var ret = function(str2){
            return str + ", " + str2;
        }
        return ret;
    },

    makeClosures : function(arr, fn) {
        return arr.map(function(x){
            return function(){return fn(x)};
        });
      
    },

    partial : function(fn, str1, str2) {
        var args = Array.prototype.slice.call(arguments, 1);

        return function(){
            var newargs = Array.prototype.slice.call(arguments);
            var newargs = args.concat(newargs);
            return fn.apply(null, newargs);
        }

    },

    useArguments : function() {
        var x = Array.prototype.slice.apply(arguments);
        var total = 0;
        for(var i = 0; i < x.length; i++){
            total += x[i];
        }
        return total;
    },

    callIt : function(fn) {
        var y = Array.prototype.slice.apply(arguments);
        y.splice(0,1);
        fn.apply(null,y);
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
