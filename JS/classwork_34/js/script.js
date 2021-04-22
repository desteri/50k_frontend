"use strict";

const arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.pop();

console.log(arr);

arr.shift();

console.log(arr);

arr.push(10);

console.log(arr);

arr.unshift(8);

console.log(arr);

delete arr[0];
delete arr[1];

console.log(arr.length);
console.log(arr);

arr[50] = 23;

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, index, arr) {
    console.log(index);
    console.log(item);

    console.log("Индекс: " + index + " Значение: " + item + " из массива: " + arr);
});

let object = {0: 1, 1: 2, 2: 3, length: 3};
console.log(object);

let array = [];

for (let i = 0; i < object.length; i++) {
    array.push(object[i]);
    console.log(object[i]);
}

console.log(array);