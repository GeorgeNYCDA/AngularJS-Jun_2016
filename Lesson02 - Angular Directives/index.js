var myModule = angular.module('MyApp', []);


myModule.controller('MyController', function($scope) {
	var self = this;


	$scope.myDogsName = "Earl";

	self.onUserClick = function() {
		console.log('you clicked the button');
		self.showContent = false;
	}


	self.student = {
		name: {
			fname: 'tom'
		}
	}

	self.showContent = true;

	// self.cssObject = {
	// 	redClass: true,
	// 	bold: true
	// };



	// self.userString = "redClass";












	self.fallSeason = {
		name: 'Fall',
		description: 'fall is the best season in ny'
	};
	self.winterSeason = {
		description: 'it is cold outside'
	};
	self.springSeason = {
		description: 'that warmth is so nice'
	};
	self.summerSeason = {
		description: 'please let this heat stop'
	};





	self.myName = "Steve";
	self.age = 12;
	self.job = 'Developer';

	self.simpleNameArray = ['max', 'tom', 'jerry', 'suzan'];

	self.objectsArray = [{
		fName: 'sam',
		lName: 'johnson'
	}, {
		fName: 'Jake',
		lName: 'Hall'
	}];

	self.dog = {
		name: 'Max',
		age: 7,
		owner: 'Tim',
		breed: 'Husky'
	};
});