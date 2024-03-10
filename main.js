// Operators in TS
// Addition (+)
let num1 = 20;
let num2 = 20;
console.log(num1 + num2);
//Subtraction (-)
let num3 = 30;
let num4 = 10;
console.log(num3 + num4);
//Multiplication (*)
let num5 = 3;
let num6 = 4;
console.log(num5 + num6);
//Division (/)
let num7 = 50;
let num8 = 5;
console.log(num7 + num8);
//Exponentiation (**)
console.log(9 ** 2);
//Modulus (%)
console.log(46 % 5);
//Unary operators (++)(--)
//a++ = a+1
let a = 6;
console.log(a++);
//a-- = a-1
console.log(a--);
//Combine Operators
console.log(4 + (3 * 4) - 2);
//Addition Calculation
import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Enter first number:"
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Enter second number:"
});
let total = input1.num1 + input2.num2;
console.log(total);
//BMI Calculator
const input3 = await inquirer.prompt({
    name: "weightInKg",
    type: "number",
    message: "Enter your weight in Kg:"
});
const input4 = await inquirer.prompt({
    name: "heightInm",
    type: "number",
    message: "Enter your height in m:"
});
let bmi = input3.weightInKg / (input4.heightInm * input4.heightInm);
console.log(` Your BMI is :${bmi}`);
//Assignment Operator
let c = 10;
c += 10;
//c + 5 =20
console.log(`c = ${c}`);
// Comparison operator
let d = 40;
let e = 25;
let isEqual = (d == e);
let isNotEqual = (d != e);
console.log(`Is it equal:${isEqual}`);
