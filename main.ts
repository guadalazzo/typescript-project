export {}; // for not having error over message var

let x = 10;
const y = 20;

const title = "Example TYPESCRIPT";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Guadalupe";
let sentence: string = `My name is ${name} and I'm learning typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Chris", 22]; // defining a tuple in that exact order

enum Color {
  Red = 5,
  Green,
  Blue,
}
let c: Color = Color.Green;

console.log(c);

let randomValue: any = 10; // Every possible type good for migrations
randomValue = 2;
randomValue = "what";

let myVariable: unknown = 10;
// (myVariable as string).toUpperCase(); // it can be a string defined when used!

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

let a;
a = 10;
a = true;

let b = 20;
// b = true; // infer that is a number when there is an initialization

let multiType: number | boolean; // is useful when the variable is not on your control
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;

function add(num1: number, num2?: number): number {
  // the ? mark is an optional parameter
  if (num2) {
    return num1 + num2;
  }
  return num1;
}
add(5, 10);
// add(5, '10'); // warns about it
add(4);
function add2(num1: number, num2: number = 10): number {
  // assign a default value of num2
  if (num2) {
    return num1 + num2;
  }
  return num1;
}
add2(1);
interface Person {
  firstName: string;
  lastName?: string;
}
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};
fullName(p);

class Employee {
  public employeeName: string; // by default all are public
  private employeeId: number;
  constructor(name: string, id: number = 0) {
    this.employeeName = name;
    this.employeeId = id;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName} ${this.employeeId}`);
  }
}
let emp1 = new Employee("Guadalupe");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  // inheritance of class
  constructor(managerName: string, managerId?: number) {
    super(managerName, managerId);
  }
  delegateWork() {
    console.log("Manager delegating tasks");
  }
}
let man1 = new Manager("Josua", 12);
console.log(man1.employeeName);
man1.greet();
man1.delegateWork();
