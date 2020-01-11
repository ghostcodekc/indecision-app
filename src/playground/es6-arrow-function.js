// ES5
// function square(x) {
//     return x * x;
// };

// console.log(square(8));

// ES6 Arrow Function

// const squareArrow = (x) => {
//    return x * x;
// };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(9));

//const fullName = 'Andrew Grube';

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Andrew Grube'))

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameArrow('Andrew GRUBE'))