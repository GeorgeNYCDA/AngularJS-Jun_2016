(function() {
  'use strict';

  angular
    .module('template')


    .filter('phoneSwap', function() {
    	return function(phoneString) {
    		var result = ''
    		if (phoneString && phoneString.length === 10) {
    			result = '(' + phoneString.substr(0, 3) + ') ' + phoneString.substr(3, 3) + ' - ' + phoneString.substr(6, 4)
    		} else {
    			result = phoneString;
    		}
    		return result;
    	};
    })

    .controller('MainController', function ($filter) {
      var self = this;

      var masterArray = [{
      	firstName: 'Tom',
      	lastName: 'Smith',
      	job: 'Google'
      }, {
      	firstName: 'Sam',
      	lastName: 'David',
      	job: 'Yahoo'
      }, {
      	firstName: 'The',
      	lastName: 'Donald',
      	job: 'Google'
      }, {
      	firstName: 'Sam',
      	lastName: 'Michaels',
      	job: 'Microsoft'
      }];

      self.people = masterArray;

      self.addPerson = function() {
        self.people.push({})
      }

      self.filterChanged = function() {
      	self.people = $filter('filter')(masterArray, self.searchObject);
      	self.people = $filter('orderBy')(self.people, 'lastName');
      };

      self.deletePerson = function(person) {
      	var index = self.people.indexOf(person); 
      	self.people.splice(index, 1)
      };
    });

})();
