class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name} and I am ${this.age} years old!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const me = new Person('Andrew Grube', 30);
const other = new Person('Jason Bourne', 22);
const anon = new Person();
console.log(me.getGreeting());
console.log(other);
console.log(anon.getDescription());
