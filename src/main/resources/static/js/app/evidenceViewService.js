'use strict';

/* Services */

var App = angular.module('homeApp.evidenceViewService', []);

var savedformData = null;
App.value('version', '0.1');

App.service('evidenceViewService', function() {

	function set(data) {
		savedformData = data;
	}
	
	function get(){
		if(savedformData!=null){
			return savedformData;
		}else{
			return null;
		}
	}

	return {
		set: set,
		get: get
	};

});