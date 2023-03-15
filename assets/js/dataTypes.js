//Primitive 
// Type Number
let a = 12;
console.log(a);

let inf = 100/0;
console.log(inf);

console.log('Arkatama' + 1);
console.log('Multi Solusindo' + (2 * 5));
console.log(NaN*3);

//Type BIGINT
const bigInt = 123456789012345678901234567890n;
console.log(bigInt);

//Type String
const nama1 = "Arkatama";
const nama2 = 'Arkatama';
const nama3 = `Arkatama`;

console.log(nama1);
console.log(nama2);
console.log(nama3);

//Type Boolean
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);

let isGreater = 10 > 5;
let isLess = 10 < 5;

console.log(isGreater);
console.log(isLess);

//Type Null
let boyfriend = null;
console.log(boyfriend);

//Type Undefined
let huruf;
console.log(huruf);

//Type Symbol
let pekerja = Symbol('Fitrah');  
console.log(pekerja);
console.log(pekerja.description);

//Type Object
let employee = {
    name : "Fitrah",
    age : 21,
    job : "Mahasiswa",
    isMarried : false,
    hobies :["sleep","dance"], 
};

console.log(`His name is ${employee.name} and he is ${employee.age} years old`);