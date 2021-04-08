// var arr = ["One", "Two", "Three"];

// arr.forEach(function(item, i, arr) {
//     alert(i + ": " + item + "(массив: " + arr + ")");
// });

// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//     return number > 0;
// });

// alert(positiveArr);

// var names = ["HTML", "CSS", "JavaScript"];

// var nameLenghts = names.map(function(name) {
//     return name.length;
// });

// alert(nameLenghts);

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//     return number > 0;
// }

// alert(arr.every(isPositive));
// alert(arr.some(isPositive));

// var arr = [1, 2, 3, 4, 5];

// var result = arr.reduce(function(sum, current) {
//     return sum + current;
// }, 0);

// alert(result);

// let ttl = document.querySelectorAll(".body_product > .ttl");

// // console.log(ttl[0].innerText);
// // console.log(ttl[1].innerText);
// // console.log(ttl[2].innerText);
// // console.log(ttl[3].innerText);
// // console.log(ttl[4].innerText);

// for(let text of ttl) {
//     console.log(text.innerText);
// }

var elements = document.getElementsByClassName("add_cart");

var myFunction = function () {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    console.log(attribute[0].innerText);
};

for(var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}