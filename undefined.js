let name;       //When a variable's value didn't set it returns undefined.

function sum(num1, num2) {       //When function didn't return anything it shows undefined.
    console.log(num1 + num2);
}
var result = sum(9, 2);
console.log(result);


function add(num, num1){         //When a functions parameters remains empty it shows undefined.
    // return num + num1;
    console.log(num + num1)
}

var result = add(7);
console.log(result);

const person = {name: 'imran', age: 22}         //When called a property from an object that is not exist then it returns undefined.
console.log(person.id);

const pondit = undefined;       //When it's set itself undefined it's return undefined but it's not recommended this way to set undefined.
console.log(pondit);

const ages = [1, 20, 50, 21];        //When an index called from an array which is not existed then it returns undefined.
console.log(ages[25]);




// NULL
// when the value of a variable is empty and which is exist before but doesn't exist right now anymore the its set to NULL.