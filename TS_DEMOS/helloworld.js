"use strict";
exports.__esModule = true;
exports.x = void 0;
var hello_1 = require("./hello");
var calculator_1 = require("./calculator");
exports.x = 'Vinay';
//x=121;
console.log('Hello World from TS ' + exports.x);
function sayhello(name) {
    console.log('hello from function ' + name);
}
sayhello('RAJJJ');
sayhello('SIMRANNNNN');
var h = new hello_1.Hello('Dineshh');
h.sayHello();
var c = new calculator_1.Calculator(2, 3);
c.addition();
