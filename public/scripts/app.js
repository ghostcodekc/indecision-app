'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound with arrow functions

var user = {
    name: 'Andrew',
    cities: ['Kansas City', 'Philadelphia', 'New York'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // console.log(this.name);
        // console.log(this.cities);

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
};
// user.printPlacesLived();

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (singleValueFromNumberArray) {
            return singleValueFromNumberArray * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
