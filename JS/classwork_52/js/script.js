(function () {

    'use strict';

    // filter
    // const array = ['Яблоки', 'Груши', 'Виноград', 'Апельсин'];

    // const res = array.filter(name => name.length < 7);

    // console.log(res);

    // map
    // const array = ['Яблоки', 'ГРУША', 'Виноград', 'Апельсин'];

    // const res = array.map(item => item.toLowerCase());

    // console.log(res);

    // every / some

    // const array = [8, 'ГРУША', 'Виноград', 'Апельсин'];

    // const res = array.some(item => typeof(item) === 'number');
    // const res = array.every(item => typeof(item) === 'number');

    // console.log(res);

    // reduce
    // const arr = ['8', '5', '6', '6', '5', '8'];

    // let sum = arr.reduce((count, item) => `${count} / ${item}`, "Вот:");

    // console.log(sum);

    const obj = {

        moshen: 'sname',
        epel: 'name',
        26: 'age'

    };

    const res = Object.entries(obj)
    .filter(item => item[1] === 'name')
    .map(item => item[0]);

    console.log(res);

}());