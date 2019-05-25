// decorator it's a function which is attached to some class with @ symbol

// decorator it's just a function
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log('Hi!');
  }
}

// Factors (it's just a fuction which return a decorator depends on some conditions)
function logging(value: boolean) {
  return value ? logged : null;
}
@logging(true) // we attach a result of this function
class Car {}

// Advanced (add function to prototype for a class where we use decorator)
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@logging(true)
@printable
class Plant {
  name = 'Green Plant';
}

const plant = new Plant();
(<any>plant).print(); // we should use (<any>plant) because in other case, it will be a tsc error. It looks like a bug

// Method Decorator
// Property Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

function overwritable(value: boolean) {
  return function(target: any, proper): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Project {
  @overwritable(false)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  // don't allow change link to method which is with this decorator
  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function() {
  console.log(1000);
};

project.calcBudget();

console.log(project);

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('Method Name: ', methodName);
  console.log('Param Index: ', paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}
const course = new Course('course 1');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
