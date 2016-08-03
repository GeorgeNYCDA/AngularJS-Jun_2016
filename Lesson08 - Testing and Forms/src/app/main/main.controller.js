(function() {
  'use strict';

  angular
    .module('template')


    .factory('Person', function() {
    	function Person(firstName) {
    		this.firstName = firstName;
    	}

    	Person.prototype.setYOB = function(year) {
    		this.year = year;
    		this.age = 2016 - year;
    	};

    	return Person;
    })

    .service('MathService', function() {
    	var self = this;

    	self.calculateAverage = function(array) {
    		var sum = 0;
    		for (var i = 0; i < array.length; i++) {
    			sum += array[i];
    		}

    		return array.length > 0 ? sum/array.length : 0;
    	};
    })


    .controller('MainController', function () {
      var self = this;

      self.greeting = "Hello World";


      self.states = [{
        name: 'California',
        abbr: 'CA'
      }, {
        name: 'Florida',
        abbr: 'FL'
      }, {
        name: 'New York',
        abbr: 'NY'
      }];


      self.state = self.states[1].abbr


      self.onSubmitClicked = function() {
        if(self.myFormManager.$valid) {
            console.log('form subbmited');
        }
      }

      // self.myFormManager
    });

})();
