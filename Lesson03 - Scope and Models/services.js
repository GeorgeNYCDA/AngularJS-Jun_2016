var myModule = angular.module('MyServices', []);

myModule.factory('Car', function() {

	function Car(make, model, year) {
	   this.make = make;
	   this.model = model;
	   this.year = year;
	   this.age = 2016 - year;
	}

	Car.prototype.setYear = function(year) {
	    this.year = year;
	    this.age = 2016 - year;
	};

	Car.prototype.setSaleDay = function(day) {
	   this.day = day;
	};

	return Car;
})
