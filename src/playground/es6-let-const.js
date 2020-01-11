var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar: ' + nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet: ' + nameLet)

const nameConst = 'Frank';
// nameConst = 'Tesla';
console.log('nameConst: ' + nameConst)

function getPetName() {
    const petName = 'Hal';
    return petName
}

const petName = getPetName();
console.log(petName);

// Block Scoping
// it's bound to function and code blocks.
// code bocks for for loop or if statement.

const fullName = 'Andrew Grube';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName);