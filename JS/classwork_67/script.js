// const a = 0;
// console.log(a);

// let obj = {
//     number: 8,
//     sayNumber: function() {
//         say = () => {
//             console.log(this);
//         }
//         say();
//     }
// }

// obj.sayNumber();

// let names = ['Sano', 'Kano', 'Aster', 'Bakastar'];

// let shortName = names.filter((name) => {
//     return name.length < 5;
// });

// console.log(shortName);

// let names = ['Sano', 'Kano', 'Aster', 'Bakastar'];

// let shortName = names.map((name) => name.toLowerCase());

// console.log(shortName);

// console.log(`Sanno + ${a}`);

// function interpol(str1, str2 = 'Текст 2') {
//     console.log(`Строка 1: ${str1} | Строка 2: ${str2}`);
// }

// interpol('Текст 1');

// function max(...number) {
//     console.log(number);
// }

// max(5, 3, 6, 5, 8, 8, 3, 5, 2, 7);

// const   arr1 = [1, 3, 5, 6],
//         arr2 = [15, 76, 23],
//         res = Math.max(100, 10, 3, ...arr1, 50, 63, 79, ...arr2);

// console.log(res);

// const user = {
//     name: 'Sanno',
//     pass: 'sanno312',
//     rool: 'admin'
// };

// const admin = {
//     name: 'admin',
//     pass: 'root'
// };

// const obj = {...user, ...admin};

// console.log(obj)

// const obj = {
//     x: 'abc',
//     y: 'xyz'
// };

// console.log(obj);

// const   x = 10,
//         y = 20;

// const obj = {x, y};

// console.log(obj);

// const   x = 10,
//         y = 20;

// const obj = {
//     x, 
//     y,
//     calc() {
//         console.log(this.x * this.y);
//     }
// };

// obj.calc();

// const user = {
//     name: 'Sanno',
//     pass: 'sanno312',
//     rool: 'admin'
// };

// const {name, pass, rool} = user;

// console.log(pass);

// const user = {
//     names: {
//         name: 'Kanno',
//         sname: 'Olir'
//     },
//     pass: 'sanno312',
//     rool: 'admin'
// };

// const {names: {name, sname}, pass, rool} = user;

// console.log(`${name} - ${sname} - ${pass} - ${rool}`);

// function connect({
//     host = 'localhost',
//     port = 3000,
//     user = 'root'
// } = {}) {
//     console.log(`${host} - ${port} - ${user}`);
// };

// connect();

// const array = [[8, 5], 6, [6, 5], 8];
// const [[a, b], c, [d, e], f] = array;
// console.log(a, b, c, d, e, f);

// const country = {
//     name: "Бишкек",
//     population: 500000,
//     gender: {
//         male: ['15%', '40%'],
//         female: ['20%', '80%']
//     }
// };

// const {name, population, gender: {male: [a, b], female: [c, d]}} = country;

// console.log(`Страна: ${name}; популяция: ${population}; гендер: мужчин - до 18 лет ${a}, от 18 лет ${b}, женщин - до 18 лет ${c}, от 18 лет ${d}`);
