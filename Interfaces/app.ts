interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any; // give us an ability to add dynamic property
  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Andrey';
}

const person: NamedPerson = {
  firstName: 'Max',
  hobbies: ['Sport', 'IT'],
  greet(lastName: string) {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}`);
  }
};

//greet({ firstName: 'Max', age: 27, hobbies: ['Sport', 'IT'] }); this variant of passing data is more strict than just pass data by using variable
changeName(person);
person.greet('Sim');

class Person implements NamedPerson {
  firstName: string;
  lastName: string;
  greet(lastName: string): void {
    console.log(`Hi, I'm ${this.firstName} ${lastName}`);
  }
}

const myPerson = new Person();
myPerson.firstName = 'Andrey';
greet(myPerson);
myPerson.greet('Anything');

//Function Types

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}
let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(number1: number, number2: number) {
  return number1 + number2;
};

console.log(myDoubleFunction(10, 20));

//Interface Inheritance

interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: 'Andrey',
  greet(lastName: string): void {
    console.log(`Hello, ${this.firstName} ${lastName}`);
  }
};

console.log(oldPerson);
