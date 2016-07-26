(function() {
  'use strict';

  angular
    .module('template')




    .directive('gdFolder', function() { 
    	return {
    		controller: 'GdFolderController as folderCtrl',
    		// scope: true,
    		// scope: false,
    	};
    })
    .controller('GdFolderController', function() {
    	var self = this;

    })

















    .directive('gdBasicControlled', function() {
    	return {
    		templateUrl: 'app/main/partials/gd-basic-controlled.html',
    		controller: 'GdBasicController as basicCtrl',
    		scope: true
    	};
    })
    .controller('GdBasicController', function() {
    	var self = this;
    	self.name = 'Jorge';
    })













    .directive('gdBasicUrl', function() {
    	return {
    		restrict: 'EA',
    		templateUrl: 'app/main/partials/gd-basic-url.html'
    	};
    })


    .directive('gdBasic', function() {
    	return {
    		template: '<h3>This is my basic template</h3>'
    	};
    });

 

})();
