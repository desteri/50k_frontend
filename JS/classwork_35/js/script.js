"use strict";

let a = 10, b = a;

b += 15;

// console.log(b);
// console.log(a);

const arr = {
    a: 1,
    b: 2
};
// console.log(arr);

const newArr = arr;
// console.log(newArr);

newArr.a = 10;
// console.log(newArr);
// console.log(arr);

function copyArr(myObj) {

    const newObj = {};

    let key;
    for (key in myObj) {
        newObj[key] = myObj[key];
    }

    return newObj;

}

const oldObj = {
    name: "Set",
    surname: "Lestar",
    hobby: {
        1: "fight",
        2: "sleep",
        3: {
            a: "Q",
            b: "W"
        }
    }
};

// console.log(oldObj);

const newObj = copyArr(oldObj);

newObj.name = "Oklosh";

// console.log(newObj); 
// console.log(oldObj);

newObj.hobby[1] = "read";

// console.log(newObj); 
// console.log(oldObj);

const newAssign = Object.assign({}, oldObj);

newAssign.name = "Phals";
// console.log(newAssign);
// console.log(oldObj);

const array = ["Power", "Strenght", "Agility"];

// const array2 = array.slice(0, 2);

// // array2[2] = "Intellect";
// // console.log(array);
// console.log(array2);

const heroBoxing = ["Punch", "Kick", "Combo"],
      heroMage = ["Fire", "Ice", "Lighting"],
      heroAll = [...heroBoxing, ...heroMage, "Ultimate", "Power"];

console.log(heroAll);

const variable = ["Punch", "Kick", "Combo"];

const variableTwo = [...variable];

variableTwo[1] = "None";
console.log(variable);
console.log(variableTwo);

const objNew = {
    a: 1,
    b: 2
};

const objNewTwo = {...objNew};

objNewTwo.b = 3;
console.log(objNew);
console.log(objNewTwo);