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


const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function(str, fn) {
    console.log(`original straing: ${str}`);
    console.log(`transformed string: ${fn(str)}`);

    console.log(`transformed by: ${fn.name}`);

}
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);
