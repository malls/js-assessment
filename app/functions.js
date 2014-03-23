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
        var funfun = function(x){
            return str + ", " + x;
        }
        return funfun;
    },

    makeClosures : function(arr, fn) {

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

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
