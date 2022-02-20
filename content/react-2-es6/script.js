
// Arrow Function &

const sum =(x=4, y=5) => x+y;

console.log(sum(5,10));
console.log(sum(4));


// Template Literal
// Multi-lines string


// DESTRUCTURING (!IMPORTANT) | Object | Array
const person = {    
    name: 'Thangg',
    age: 25
};

console.log('Name:::', person.name);
console.log('Name:::', person['name']);


const {name, age} = person;
console.log('Age:::', age);


// Spread syntax
const person1 = {
    id: 1,
    name: 'Thang',
    age: 25
}

const person2 = {
    job: 'BA',
    level: 'middle'
}

const CloneObj = {...person1, ...person2};

console.log(CloneObj);

// CLOSURE