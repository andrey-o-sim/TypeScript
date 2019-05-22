var _this = this;
// tuples
var address = ['Superstreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["White"] = 2] = "White";
})(Color || (Color = {}));
function sayHello() {
    console.log('Hello');
}
function multiply(value1, value2) {
    return value1 * value2;
}
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply);
var userData = {
    name: 'Andrey',
    age: 27
};
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return _this.data;
    }
};
// Union Types
var myRealRealAge = 27;
console.log(typeof myRealRealAge);
