"use strict";

let str = "text";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(strObj);

let array = [1, 2, 3];

// console.log(array);

let car = {
    kuzov: "Железо",
    kolesa: "4 колеса",
    modal: function() {
        console.log("text");
    }
};

// let mb = {
//     marka: "Мерс",
//     year: "2021"
// };

let mb = Object.create(car);

// mb.__proto__ = car;

// Object.setPrototypeOf(mb, car);



console.log(mb.kuzov);

mb.modal();