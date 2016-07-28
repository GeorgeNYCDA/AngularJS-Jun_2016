(function() {
  'use strict';

  angular
    .module('template')


    .directive('gdTransclude', function() {
        return {
            templateUrl: 'app/main/partials/gd-transclude.html',
            transclude: true,
            link: function(scope, element, attributes) {
                console.log(attributes.color)
                element.on('click', function() {
                    this.style.display = 'none';
                });
            }
        }
    })

























    .directive('gdExpand', function() {
        return {
            controller: 'GDExpandController as expandCtrl',
            templateUrl: 'app/main/partials/gd-expand.html',
            bindToController: true,
            scope: {
                toExpand: '=',
                position: '@',
                onEditClicked: '&'
            }
        };
    })
    .controller('GDExpandController', function() {
        var self = this;
        self.edit = function() {
            self.onEditClicked({
                miso: self.toExpand
            });
        };
    })












    .directive('gdFolder', function() { 
    	return {
            templateUrl: 'app/main/partials/gd-folder.html',
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
