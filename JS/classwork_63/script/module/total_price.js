function total_price() {
    
    "use strict";
    let countProduct = document.querySelectorAll('.info__price .oprice');
    let count = 0;

    for (var i = 0; i < countProduct.length; i++) {
        count += (+countProduct[i].textContent);
    }

    document.getElementsByClassName('total__card')[0].innerHTML = `$${count}`;
    document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$${count}`;

}

module.exports = total_price;