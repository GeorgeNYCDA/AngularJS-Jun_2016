var myModule = angular.module('MyApp', ['MyServices']);

myModule.controller('MyController', function($scope, $log, $timeout, $interval, Car) {
	var self = this;

	self.car = new Car('Honda', 'Accord', 1990);

	self.oldCar = new Car('Ford', 'Escort', 1950);


	// self.car = {
	// 	make: 'Honda',
	// 	model: 'Accord',
	// 	year: 1990,
	// 	age: 2016 - 1990
	// };

	// self.onYearChanged = function(year) {
	// 	// self.car.age = 2016 - year;
	// 	self.car.setYear(year);
	// };


	// $scope.$watch('myCtrl.car.year', function(newValue) {
	// 	// console.log('newValue: ', newValue);
	// 	// console.log('oldValue: ', oldValue);
	// 	if (newValue !== undefined) {
	// 		self.car.age = 2016 - newValue;
	// 	}
	// });





	// $scope.name = '...';
	// $scope.countdown = 10;


	// self.name = "george";

	// self.countdown = 10;

	// $timeout(function() {
	// 	self.name = "harry";
	// }, 3000);

	// var promise = $interval(function() {
	// 	self.countdown--;
	// }, 1000, 10);

	// $log.log('Log log');
	// $log.debug('Log debug');
	// $log.error('Log error');
	// $log.warn('Log warn');

});