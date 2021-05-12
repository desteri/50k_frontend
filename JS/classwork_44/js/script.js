(function () {

    // 'use strict';

    // function getThis(a, b) {
    //     // console.log(this);

    //     function arif() {
    //         // console.log(this);

    //         return a + b;
    //     }

    //     console.log(arif());

    // }

    // getThis(3, 10);

    // const obj = {
    //     name: "Sano",
    //     age: 27,
    //     sum: function () {

    //         console.log(this);
            
    //         function test() {
    //             console.log(this);
    //         }
            
    //         test();

    //     }
    // };

    // obj.sum();

    // function user(name, age) {
        
    //     this.name = name,
    //     this.age = age,
    //     this.date_ = function() {

    //         console.log("Hello " + this.name);

    //     };
    // }

    // let obj = new user("Sano", 27);

    // obj.date_();

    // function hi(age) {

    //     console.log(this);
    //     console.log(this.name);
    //     console.log(age);

    // }

    // const newObj = {

    //     name: "Sano",

    // };

    // hi.call(newObj, 27);
    // hi.apply(newObj, ['27']);

    // function count(num) {
        
    //     return this * num;

    // }

    // const multiple = count.bind(5);

    // console.log(multiple(10));

    const click = document.querySelector('#btn1');

    click.addEventListener('click', function() {

        this.remove();

    });

}());