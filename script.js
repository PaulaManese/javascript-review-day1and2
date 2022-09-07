// DAY - 1

console.log ("Hello World!");
// Naming Variables
const pi = 3.1416; //cannot be re-assigned
console.log (pi);

var name = "Lalaine";
console.log (name);

let name1 = "Regie";
console.log (name1);

//let name1 ="Paulo"
//console.log (name1); //let cannot be re-declared

//Primitive Data Types
var name = "Marco";
console.log (name); //var can be overwrite

let fruit = "Guava"; //String - words characters
let age = 15; //Integer/Number
let grade = 90.5;

console.log (fruit);
console.log (age);
console.log (grade);

let isPresent = true;
console.log(isPresent);

let myCopy;
console.log (myCopy); //nothing assigned that is why it is undefined.


let option1 = null;
console.log (option1);

//let 1fruit = apple;
//console.log (1fruit); // we do not apply a number first before a letter/word

let $year = 2022;
console.log ($year); //we can use special characters before word when naming a variable

let $_year = 2023;
console.log($_year); //we can use 2 special characters before word when naming a variable.

let state = `Washington`;
console.log(state);

//Objects

let person = {
    //property:value

    name: "Jose Rizal",//string
    age:30,
    address: "Calamba, Laguna", //string
    isDoctor:true, //boolean
    spouse:null,
    siblings: [ //array

        "Paciano",
        "Saturnina",
        "Narcisa",
        "Olympia",
        "Soledad",
        "Concepcion",
        "Maria",
        "Lucia",
        "Josefa",
        "Trinidad"

    ]

};

console.log (person);
console.log (person.name);
console.log (person.siblings); //use dot notation to call a specific object

let fruits = ["Apple", "Orange", "Watermelon", "Sampaloc", "Avocado"];
console.log (fruits);
console.log (fruits.length);
console.log (fruits[2]);

//Function

    //Function Declaration
    //function keyword
    //function name and parenthesis (holds the parameters)
    //curly braces - determine its block of codes; statements are written inside the code block


function greeting (firstName, lastName) //parameters a.k.a "arguments", "properties", "attributes"
                                        //named variable passed into a function
                                        //imports arguments into function
{

    console.log (`My name is ${firstName}, ${lastName}, it was nice to meet you`);

}

greeting ("Gerard", "Way"); //invoke function calls the function once
greeting ("Chester", "Bennington");

function product (a,b) {
    
        console.log ("Product:");
        return (a*b) //stops the execution of a function and returns a value
}

console.log(product(2,4));

function averageNum (num1, num2, num3) {
    return (num1+num2+num3)/3;
}

console.log (averageNum(1,2,3));

function convertNumbers (meters) {
    const m = 1000;
    console.log ("Result in km: ");
    return (meters/m)
}

console.log (convertNumbers(20));



// DAY - 2
console.log ("connected");
/*JS Operators*/
//symbols used to manipulate values/operands.
//used to perform specific mathematical and logical computation in operands.

/*Assignment Operator (=) */

let a = 14;
a = 18; //primitive data type - number

let b=a;
console.log(b);

/**Arithmetic Operator */
//performs mathematical operation on numerical values/operands and returns a single numerical value;

//Addition (+)
console.log (20+30); //50 - primitive data type - number/integer
console.log ("20"+"30"); //2030 - concatenation - a.k.a "String concatenation"
                            // links 2 strings together.
console.log ('20'+'30'); //2030
console.log (`20`+`30`); //2030
console.log ('Twenty' +  'Thirty'); //TwentyThirty

//Subtraction/difference (-)
console.log (20-10);//10
console.log ("20"-"10"); //10 - Type coercion - automatic/implicit ONLY conversion of values.

let val1 = '50';
let val2 = 30;
let diff = val1-val2;
console.log (diff);

console.log ("Twenty" - "ten"); //NaN - Not a number

//Division (/)
console.log (50/5); //10
console.log ("50"/"5"); //coercion
console.log ("Fifty"/"Five");//NaN

//Modulo/Modulus Division (%) - remainder result
//consult.log (100 % 3);

//Multiplication
console.log (20*5);
console.log ("20" * "5"); //coercion

//Increment (++) && Decrement (--)
let c = 30;

//If operator comes first, it performs arithmetic operations before displaying the result.

console.log (++c); //31
console.log (c); //31

console.log (--c); //30
console.log (c); //30

//If operand comes first before the operator, it displays the value of the operand before performing arithmetic operations.
console.log (c++); //30
console.log (c); //31
console.log (c--); //31
console.log (c); //30

/*

Exercise 1

Log the results in the console

Perform arithmetic Operation on two numbers.
Perform arithmetic Operation on two variables with numerical values.
Multiply a number to the difference of two numbers
	PEMDAS RULE

    FREEDOM TO CODE PO :)

*/

//SOLUTION 1
console.log (65+38);

//SOLUTION 2
let f=50;
let g = 10;

console.log (f/g);

//SOLUTION 3
let h = 4;
console.log ((52-29)*h);

/**Compound Assignment Operators */
//shorthand for arithmetic and assignment operations.
//performs mathematical operation first then assigning the result back to the variable.

//Long method
let j = 15;
console.log (j+3);
console.log (j);

//Addition Assignment Operator (+=)
let i = 15;
console.log (i += 3); //18
console.log (i); //18

//Subtraction Assignment Operator (-=);
console.log (i); //18
console.log (i -= 10); //8

//Multiplication-Assigment Operator (*=);
console.log (i *= 15); //120

//Division-Assignment Operator (/=)
console.log (i /= 2); //60

//Modulus-Assignment Operator (%=)
console.log (i %= 8); //4

//Comparison Operators
//compares two operands and returns a logical value (true or false).

//relational:
// < - less than
// > - greater than

//Equality Operator (==) a.k.a "loose equality"
//compares the same value (sameness) regardless of data type because of coercion.

console.log ("Jan" == "Jan"); //true
console.log (true == true); //true
console.log (false == true); //false
console.log (true == false); //false
console.log (false == false); //true
console.log (null == undefined); //true

//Binary Number
//1 = true
//0 = false

console.log ("20" == 20); //true
console.log (true == 1); //true
console.log (true == 2); //false
console.log (true == 3); //false

console.log (false == 0); //true
console.log (false == 1); //false




