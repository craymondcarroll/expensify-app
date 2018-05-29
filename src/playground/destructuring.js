// ES6 Destructuring



///////////////////////////////////////////////
// Object Destructuring
///////////////////////////////////////////////

const person = {

    name: 'Raymond',

    age:  26,
    location: {
        city: 'Washington',
        temp: 93
    }

};




//-- Object Destructing with a default value for company
const {name, age,company = 'Unknown'} = person;
console.log(`${name} is ${age}.`);

const {city,temp} = person.location;

if(city && temp) {
    console.log(`It's ${temp} in ${city}`)
}

//-- Destructing with replacing name of temp to temperature
const {temp: temperature} = person.location;

if(city && temp) {
    console.log(`It's ${temperature} in ${city}`)
}


console.log(`${name} works at  ${company}.`)


const book = {

    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
      //  name: 'Penguin'
    }

};


const {title,author} = book;
const {name:publisherName = 'Self-Published'} = book.publisher;

console.log(`The book ${title} was published by ${publisherName}`);



///////////////////////////////////////////////
// Array Destructuring
///////////////////////////////////////////////

const address =['114 Ivywood Drive','Washington', 'DC', '20533'];

console.log(`You are in ${address[1]} ${address[2]}`)

// Examples
const [street, city2, state, zip] = address;

// const [, city2, state, zip] = address;
// const [street, city2, state,] = address;
//const [street, city2, state="NY", zip] = address;
console.log(`You are in ${city2} ${state}`)
