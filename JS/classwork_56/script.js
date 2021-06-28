(function () {

    'use strict';

    const saveClick = document.querySelector('.form [name="save"]');
    const resetClick = document.querySelector('.form [name="reset"]');

    const check_name = localStorage.getItem('name');
    const check_sname = localStorage.getItem('sname');
    const check_number = localStorage.getItem('number');
    const check_address = localStorage.getItem('address');

    if(check_name || check_sname || check_number || check_address) {
        document.getElementsByClassName("name")[0].value = check_name;
        document.querySelector('[name="sname"]').value = check_sname;
        document.querySelector('[name="number"]').value = check_number;
        document.querySelector('[name="address"]').value = check_address;
    }

    saveClick.addEventListener('click', (e) => {

        e.preventDefault();

        const name  = document.getElementsByClassName("name")[0].value;
        const sname = document.querySelector('[name="sname"]').value;
        const number = document.querySelector('[name="number"]').value;
        const address = document.querySelector('[name="address"]').value;

        if(name && sname && number && address) {
            localStorage.setItem('name', name);
            localStorage.setItem('sname', sname);
            localStorage.setItem('number', number);
            localStorage.setItem('address', address);
        } else {
            console.log('empty');
        }

    });

    resetClick.addEventListener('click', (e) => {
    
        e.preventDefault();

        localStorage.clear();

    });

}());