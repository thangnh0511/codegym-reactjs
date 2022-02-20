let user = {
    name: "John"
};

let admin = user;

admin.name = "Alice";

console.log(user.name);

user.name = "Thangg";

console.log(admin.name);


let a = {} ;
let b = a ; 

console.log(a === b);


// =========================

let newMap = new Map();

newMap.set({name: "trainer"}, ['Name1', 'Name2']);

console.log(newMap);








// =========================
// NOTE: 
// * Shallow copy / deep copy 
// * Lodash
// * Redux Saga

// GENERATOR FUNCTION  / Keyword yield 

