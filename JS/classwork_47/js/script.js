(function () {

    'use strict';

    class cartProduct {

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

    new cartProduct(
        'New',
        'green', 
        'img/img61.jpg',
        'Crepe Jacket With Pompom',
        1230,
        2500,
        '.main__list'
    ).render();

    new cartProduct(
        '-25%',
        'orange',
        'img/img50.jpg',
        'Animal Print Sweatshirt',
        2670,
        4700,
        '.main__list'
    ).render();

    new cartProduct(
        'Sold',
        undefined,
        'img/img51.jpg',
        'Cloud Print Turtleneck',
        6300,
        8150,
        '.main__list'
    ).render();

    new cartProduct(
        'New',
        'green',
        'img/img63.jpg',
        'Backpack Plane',
        3940,
        9530,
        '.main__list'
    ).render();

    new cartProduct(
        '-50%',
        'orange',
        'img/img63.jpg',
        'Backpack Plane',
        3940,
        9530,
        '.main__list'
    ).render();

}());