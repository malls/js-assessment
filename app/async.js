if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {
    	var request = new XMLHttpRequest();
    	request.open("get", url, true).then(return request);
    	
    }
  };
});
