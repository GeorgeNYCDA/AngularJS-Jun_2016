angular.module('MyServices', [])



.service('NameHelper', function(GLOBAL_DOGS) {
	var self = this;

	var userKey = 123;

	self.getFullName = function(person) {
		return person.fname + ' ' + person.lname;
	};

	self.getMakeAndModel = function(car) {
		return car.make + ' ' + car.model;
	};
})

.value('GLOBAL_DOGS', [{
	name: 'max',
	age: 12
}, {
	name: 'snoop',
	age: 5
}])

.value('API_KEY', '123456')

.factory('Car', function(NameHelper) {

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
});
