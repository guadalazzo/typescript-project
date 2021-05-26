"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var x = 10;
var y = 20;
var title = "Example TYPESCRIPT";
var isBeginner = true;
var total = 0;
var name = "Guadalupe";
var sentence = "My name is " + name + " and I'm learning typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Chris", 22]; // defining a tuple in that exact order
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 10; // Every possible type good for migrations
randomValue = 2;
randomValue = "what";
var myVariable = 10;
// (myVariable as string).toUpperCase(); // it can be a string defined when used!
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var a;
a = 10;
a = true;
var b = 20;
// b = true; // infer that is a number when there is an initialization
var multiType; // is useful when the variable is not on your control
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
function add(num1, num2) {
    // the ? mark is an optional parameter
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
add(5, 10);
// add(5, '10'); // warns about it
add(4);
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    // assign a default value of num2
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
add2(1);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        if (id === void 0) { id = 0; }
        this.employeeName = name;
        this.employeeId = id;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName + " " + this.employeeId);
    };
    return Employee;
}());
var emp1 = new Employee("Guadalupe");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    // inheritance of class
    function Manager(managerName, managerId) {
        return _super.call(this, managerName, managerId) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var man1 = new Manager("Josua", 12);
console.log(man1.employeeName);
man1.greet();
man1.delegateWork();
