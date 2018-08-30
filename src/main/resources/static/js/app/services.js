
'use strict';

/* Services */

var App = angular.module('homeApp.services', []);

var savedData = null;
App.value('version', '0.1');

App.service('objectService', function() {
	  
	  function set(group) {
	    savedData = group;
	  }
	  function get() {
		  if(savedData!=null){
			    return savedData;
			    }else{
			     return null;
			    }
	  }

	  return {
	   set: set,
	   get: get
	  };

	 });