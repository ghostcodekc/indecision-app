class Person {
  constructor(name = "Anonymous", age = 0) {
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

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`; // description = description + ` Their major is ${this.major}`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = "undefined") {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let description = super.getGreeting();
    if (this.homeLocation) {
      description += ` I'm visiting from ${this.homeLocation}`;
    }
    return description;
  }
}

const me = new Traveler("Andrew Grube", 30, "Kansas City");
console.log(me);
//console.log(me.hasMajor());
console.log(me.getGreeting());

const other = new Traveler();
console.log(other);
console.log(other.getDescription());

// const other = new Person("Jason Bourne", 22);
// const anon = new Person();
// console.log(me.getGreeting());
// console.log(other);
// console.log(anon.getDescription());
