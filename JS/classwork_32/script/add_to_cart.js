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

// function test_fun(param, param2, param3) {
// 	var number = 10;
// 	var res;
// 	res = number + param + param2 + param3;

// 	alert(res);
// }

// test_fun(20, 1, 3);

// const arr = {
// 	name: "Leon",
// 	age: 23,
// 	param: {
// 		color: "black",
// 		nat: "japanese"
// 	}
// };

// // console.log(arr);

// // delete arr.age;

// // console.log(arr);

// for (let key in arr) {

// 	if(typeof(arr[key]) === 'object') {
		
// 		for (let key2 in arr[key]) {
// 			console.log(arr[key][key2]);
// 		}

// 	} else {
// 		console.log(arr[key]);
// 	}

// }

// var elements = document.getElementsByClassName("add_cart");

// var myFunction = function () {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//     alert(attribute[0].innerText);
// };

// for(var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

// function nameFun(number) {
// 	let num = number;

// 	console.log(num);
// }

// nameFun(300);

// let text = "     Hi! How are you?        ";
// console.log(text);
// console.log(text.trim());

// let number = 452315;
// number.toString();

let x = "9.6463523";

x = Number(x);

console.log(x.toFixed(3));

