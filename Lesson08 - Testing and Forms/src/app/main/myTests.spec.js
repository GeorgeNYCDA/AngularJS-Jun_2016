describe('MathService', function() {
	var toTest;

	beforeEach(module('template'));
	beforeEach(inject(function(_MathService_) {
		toTest = _MathService_;
	}));

	it('should calculate the average correctly', function() {
		var myArray = [1, 2, 3, 4, 5];
		var result;

		result = toTest.calculateAverage(myArray);
		expect(result).toBe(3)
	});

	it('should return 0 of array is empty', function() {
		var myArray = [];
		var result = toTest.calculateAverage(myArray);

		expect(result).toBe(0);
	});
});

describe('Person', function() {
	var Person;

	beforeEach(module('template'));
	beforeEach(inject(function(_Person_) {
		Person = _Person_;
	}));

	afterEach(function() {
		
	})

	it('should initialize the firstname correctly', function() {
		var toTest = new Person('George');
		expect(toTest.firstName).toBe('George');
	});

	it('should set the year and calculate the age correctly', function() {
		var toTest = new Person('George');
		toTest.setYOB(1990);

		expect(toTest.year).toBe(1990);
		expect(toTest.age).toBe(26);
	})
});


describe('MainController', function() {
	var toTest;

	beforeEach(module('template'));
	beforeEach(inject(function(_$controller_) {
		toTest = _$controller_('MainController');
	}));

	it('should have a greeting defined', function() {
		expect(toTest.greeting).toBeDefined();
	});
})