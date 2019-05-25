// decorator it's a function which is attached to some class with @ symbol
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// decorator it's just a function
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hi!');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factors (it's just a fuction which return a decorator depends on some conditions)
function logging(value) {
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true) // we attach a result of this function
    ], Car);
    return Car;
}());
// Advanced (add function to prototype for a class where we use decorator)
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green Plant';
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print(); // we should use (<any>plant) because in other case, it will be a tsc error. It looks like a bug
// Method Decorator
// Property Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, proper) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    // don't allow change link to method which is with this decorator
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function () {
    console.log(1000);
};
project.calcBudget();
console.log(project);
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('Target: ', target);
    console.log('Method Name: ', methodName);
    console.log('Param Index: ', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('course 1');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
