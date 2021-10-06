"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(name, name1) {
        this.name = name;
        this.name1 = name1;
    }
    Calculator.prototype.addition = function () {
        console.log('Addition is  ' + (this.name + this.name1));
    };
    Calculator.prototype.subtraction = function () {
        console.log('Subtraction is  ' + (this.name - this.name1));
    };
    Calculator.prototype.multiplication = function () {
        console.log('Multiplication is  ' + (this.name * this.name1));
    };
    Calculator.prototype.division = function () {
        console.log('Division is  ' + (this.name / this.name1));
    };
    return Calculator;
}());
exports.Calculator = Calculator;
