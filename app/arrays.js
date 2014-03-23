if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var count = 0
        for(var i = 0; i < arr.length; i++){
            count += arr[i];
        }
        return count;
    },

    remove : function(arr, item) {
        for(var i = 0; i < arr.length; i++){
            if (arr[i] === item){
                arr.splice(i,1);
            }
        };
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i = 0; i < arr.length; i++){
            var x = arr.indexOf(item);
                if(x>0){
                    arr.splice(x,1)
                };
            };
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.reverse();
        arr.push(item);
        arr.reverse();
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
       var counter = 0;
       for(var i = 0; i < arr.length; i++){
            if(arr[i] === item){
                counter++;
            }
       }
       return counter;
    },

    duplicates : function(arr) {
        var newarr = [];
        for(var i = 0; i < arr.length; i++){
            for(var y = 0; y < arr.length; y++){
                if(arr[i] === arr[y] && i !==y && newarr.indexOf(arr[i]) < 0){
                    newarr.push(arr[i]);
                }
            }
       }
       return newarr;
    },

    square : function(arr) {
        var a = [];
        for(var i = 0; i < arr.length; i++){
            a[i] = arr[i]*arr[i];
        }
        return a;
    },

    findAllOccurrences : function(arr, target) {
        var ret = [];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === target){
                ret.push(i);
            }
        };
        return ret;
    }
    };
});




























