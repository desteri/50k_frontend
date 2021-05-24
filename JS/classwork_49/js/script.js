(function () {

    'use strict';

    const   inputSom = document.querySelector('#som'),
            inputUsd = document.querySelector('#usd');

    inputSom.addEventListener('input', () => {

        const request = new XMLHttpRequest();

        request.open("GET", "js/current.json");
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();

        request.addEventListener('load', () => {

            if (request.status === 200) {
                
                // console.log(request.response);
                // console.log(JSON.parse(request.response));

                const currency = JSON.parse(request.response);

                const result = inputSom.value / currency.current.usd;

                inputUsd.value = (result).toFixed(2);

            } else {

                inputUsd.value = "Error!";

            }

        });

    });

}());