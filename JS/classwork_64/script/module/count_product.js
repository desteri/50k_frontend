function count_product() {
    
    "use strict";
    let cardCount = document.getElementsByClassName('bag__item').length;
    
    document.getElementsByClassName('card__count')[0].innerHTML = cardCount;
}

module.exports = count_product;