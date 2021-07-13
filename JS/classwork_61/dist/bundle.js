/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script/module/add_to_cart.js":
/*!**************************************!*\
  !*** ./script/module/add_to_cart.js ***!
  \**************************************/
/***/ ((module) => {

function add_to_card() {
    function myFunction(ttl, prc, img, del) {
        
        let title = ttl;
        let price = prc;
        let image = img;
        let delPrice = del;
        
        let createLi = document.createElement('li');
        createLi.classList.add('bag__item');
    
        createLi.innerHTML = '<div class="bag__img">' +
                                '<a href="#">' +
                                    '<img src="' + image[0].src + '" alt="">' +
                                '</a>' +
                            '</div>' +
                            '<div class="bag__info">' +
                                '<p class="info__title">' +
                                    '<a href="#">' + title[0].innerText + '</a>' +
                                '</p>' +
                                '<div class="info__price">' +
                                    '<span class="currency">$</span>' +
                                    '<span class="oprice">' + price[0].innerText + '</span>' +
                                    '<del>' + delPrice[0].innerText + '</del>' +
                                '</div>' +
                                '<div class="trash">' +
                                    '<a href="#"><i class="far fa-trash-alt"></i></a>' +
                                '</div>' +
                            '</div>';
    
        let blockCard = document.querySelector('.bag ul');
        blockCard.appendChild(createLi);
    
        alert("Товары успешно добавлены в корзину!");
    
        delete_product();
        total_price();
        count_product();

        fetch('http://localhost:3000/requests', {
            
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({
                "ttl": title[0].innerText,
                "image": image[0].src,
                "price": price[0].innerText
            })

        });
    
    }
    
    // for (var i = 0; i < className.length; i++) {
        
    //     className[i].addEventListener('click', myFunction, false);
    
    // }

    document.querySelector('.main__list').addEventListener('click', event => {

        if(event.target.parentNode.classList.contains('list__item')) return false;

        let ttl = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
        let price = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
        let img = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");
        let del = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price del");
        
        myFunction(ttl, price, img, del);

    });

}

module.exports = add_to_card;

/***/ }),

/***/ "./script/module/count_product.js":
/*!****************************************!*\
  !*** ./script/module/count_product.js ***!
  \****************************************/
/***/ ((module) => {

function count_product() {
    
    "use strict";
    let cardCount = document.getElementsByClassName('bag__item').length;
    
    document.getElementsByClassName('card__count')[0].innerHTML = cardCount;
}

module.exports = count_product;

/***/ }),

/***/ "./script/module/delete_product.js":
/*!*****************************************!*\
  !*** ./script/module/delete_product.js ***!
  \*****************************************/
/***/ ((module) => {

function delete_product() {
    
    "use strict";
    let clickTrash = document.querySelectorAll(".trash");
    
    let funDelete = function(event) {
        
        event.preventDefault();

        this.parentNode.parentNode.remove();

        total_price();
        count_product();
        
    };

    for (var i = 0; i < clickTrash.length; i++) {

        clickTrash[i].addEventListener('click', funDelete, false);

    }
}

module.exports = delete_product;

/***/ }),

/***/ "./script/module/get_list_product.js":
/*!*******************************************!*\
  !*** ./script/module/get_list_product.js ***!
  \*******************************************/
/***/ ((module) => {

function get_list_product() {
    class CartProduct {

        constructor (tooltips, tooltipsClass, img, title, originPrice, oldPrice, innerBlock) {
    
            this.tooltips = tooltips;
            this.tooltipsClass = tooltipsClass;
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.currency = 85;
            this.originPrice = this.convertToUSD(this.originPrice);
            this.oldPrice = this.convertToUSD(this.oldPrice);
    
        }
    
        convertToUSD(price) {
            
            const result = price / this.currency;
            return result.toFixed(2);
    
        }
    
        render() {
    
            const div = document.createElement('div');
            div.classList.add('list__item');
            div.innerHTML = `
                                <div class="item__img">
                                    <div class="tooltips ${this.tooltipsClass}">
                                        <span>${this.tooltips}</span>
                                    </div>
    
                                    <img class="image" src=${this.img} alt="">
    
                                    <div class="arrows">
                                        <span><i class="fas fa-arrows-alt"></i> Quick view</span>
                                    </div>
                                </div>
                                <div class="item__title">
                                    <a class="title" href="#">${this.title}</a>
    
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <span>6 Review(s)</span>
                                    </div>
    
                                    <div class="price">
                                        <span class="currency">$</span>
                                        <span class="oprice">${this.originPrice}</span>
    
                                        <del>$${this.oldPrice}</del>
                                    </div>
                                </div>
    
                                <div class="item__hide">
                                    <div class="item__icon">
                                        <a class="icon__hidden add__card" href="#"><i class="fas fa-shopping-bag"></i></a>
                                    </div>
    
                                    <div class="item__icon">
                                        <a class="icon__hidden" href="#"><i class="fas fa-balance-scale"></i></a>
                                    </div>
    
                                    <div class="item__icon">
                                        <a class="icon__hidden" href="#"><i class="fas fa-heart"></i></a>
                                    </div>
                                </div>
            `;
    
            this.innerBlock.append(div);
    
        }
    
    }
    
    const getProduct = async (url) => {
    
        const result = await fetch(url);
    
        if(!result.ok) {
            throw new Error(`Ошибка fetch ${url} статус: ${result.status}`);
        }
    
        return await result.json();
    
    };
    
    getProduct('http://localhost:3000/products')
    .then(data => {
    
        data.forEach(({ttl, color, img, title, origin_price, old_price}) => {
    
            new CartProduct(
                ttl,
                color, 
                img,
                title,
                origin_price,
                old_price,
                '.main__list'
            ).render();
    
        });
    
    });
}

module.exports = get_list_product;

/***/ }),

/***/ "./script/module/total_price.js":
/*!**************************************!*\
  !*** ./script/module/total_price.js ***!
  \**************************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
(function() {

    const get_list_product = __webpack_require__(/*! ./module/get_list_product */ "./script/module/get_list_product.js"),
        add_to_card = __webpack_require__(/*! ./module/add_to_cart */ "./script/module/add_to_cart.js"),
        count_product = __webpack_require__(/*! ./module/count_product */ "./script/module/count_product.js"),
        delete_product = __webpack_require__(/*! ./module/delete_product */ "./script/module/delete_product.js"),
        total_price = __webpack_require__(/*! ./module/total_price */ "./script/module/total_price.js");

    get_list_product();
    add_to_card();
    count_product();
    delete_product();
    total_price();

}());
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map