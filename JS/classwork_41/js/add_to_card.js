"use strict";

function addProduct() {

    let className = document.getElementsByClassName("add__card");

    let myFunction = function(event) {
        
        event.preventDefault();
        
        let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
        let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
        let image = this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");
        let delPrice = this.parentNode.parentNode.parentNode.querySelectorAll(".price del");
        
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
    
        delProduct();
        sumCount();
        updateeCount();
    
    };
    
    for (var i = 0; i < className.length; i++) {
        
        className[i].addEventListener('click', myFunction, false);
    
    }

}

function delProduct() {
    
    let clickTrash = document.querySelectorAll(".trash");
    
    let funDelete = function(event) {
        
        event.preventDefault();

        this.parentNode.parentNode.remove();

        sumCount();
        updateeCount();
        
    };

    for (var i = 0; i < clickTrash.length; i++) {

        clickTrash[i].addEventListener('click', funDelete, false);

    }
}

function sumCount() {
    
    let countProduct = document.querySelectorAll('.info__price .oprice');
    let count = 0;

    for (var i = 0; i < countProduct.length; i++) {
        count += (+countProduct[i].textContent);
    }

    document.getElementsByClassName('total__card')[0].innerHTML = `$${count}`;
    document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$${count}`;

}

function updateeCount() {
    
    let cardCount = document.getElementsByClassName('bag__item').length;
    
    document.getElementsByClassName('card__count')[0].innerHTML = cardCount;
}

addProduct();