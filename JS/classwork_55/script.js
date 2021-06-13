(function () {

    'use strict';

    class Thenable {
        
        constructor(num) {

            this.num = num;

        }
        
        then(resolve, reject) {

            setTimeout(() => resolve(this.num * 2), 5000);

        }

    }

    async function f() {
        
        let result = await new Thenable(5);
        alert(result);

    }

    f();

}());