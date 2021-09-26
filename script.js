'use strict';

// const bookings = [];

// const createBooking = function(flightNum, 
//     numPassangers = 1, 
//     price = 200 * numPassangers){

//     const booking = {
//         flightNum,
//         numPassangers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LMH 123');
// createBooking('LMH 123', 2, 400);
// createBooking('LMH 123', 3);
// createBooking('LMH 123', 4);


// const flight = 'LM 234'
// const bart = {
//     name: 'Bart Stachowski',
//     passport: 1234567890
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LM99999'
//     passenger.name = 'Mr.' + passenger.name;

//     if(passenger.passport === 1234567890){
//         alert('It is you')
//     } else(
//         alert('Wrong passport number')
//     )
// }

// // checkIn(flight, bart);
// // console.log(flight);
// // console.log(bart);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 1000000); 
// }
// newPassport(bart);
// checkIn(flight, bart);


// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer = function(str, fn) {
//     console.log(`original straing: ${str}`);
//     console.log(`transformed string: ${fn(str)}`);

//     console.log(`transformed by: ${fn.name}`);

// }
// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const greet = function(greeting){
//     return function (name){
//         console.log(`${greeting} ${name}`);
//     };
// };
// const greeterHey = greet('Hey ');
// greeterHey('Bart');
// greeterHey('Mathias ');

// greet('Hello') ('Timon');

// //Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('HOLLA')('SIMON');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} 
        flight ${this.iataCode} ${flightNum}`);

        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})

    },

};

lufthansa.book(239, 'Teodor Smith');
lufthansa.book(666, 'Lucian Drow');
console.log(lufthansa);


const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
//does NOt work
// book(333333, 'SARAH SARAH SARAH')

//CALL METHOD
book.call(euroWings, 3333, 'SARAH SARAH');
console.log(euroWings);

book.call(lufthansa, 256, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Line',
    iataCode: 'SAL',
    bookings: []
}

book.call(swiss, 555, 'Gary Move Out')
console.log(swiss);

//APPLY method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);