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

    const   search = document.querySelector("[name = 'search']"),
            btnSearch = document.querySelector(".search button"),
            searchRes = document.querySelector(".search__result");

    btnSearch.addEventListener('click', (event) => {

        event.preventDefault();

        const request_ = new XMLHttpRequest();

        request_.open("GET", "js/search.php?query=" + search.value);

        searchRes.innerHTML = "Данные отправлены!"; 

        // request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request_.send();

        request_.addEventListener('load', () => {

            if (request_.status === 200) {
                
                const data = JSON.parse(request_.response);
                let createUl = document.createElement('ul');

                for (let i = 0; i < data.length; i++) {
                    
                    createUl.innerHTML += `<li>
                                            <a href="${data[i].href}">${data[i].text}</a>
                                            </li>`;
    
                }

                searchRes.innerHTML = createUl.outerHTML;
            
            } else {

                console.log('Error!');

            }

        });

    });

}());