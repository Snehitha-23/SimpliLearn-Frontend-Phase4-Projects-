"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.printPerson = function () {
        console.log('id =' + this.id);
        console.log('name =' + this.name);
    };
    return Person;
}());
exports.Person = Person;
