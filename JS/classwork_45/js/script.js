(function () {

    'use strict';

    class area {

        constructor (width, height) {

            this.width = width;
            this.height = height;
            
        }

        calcArea() {

            return this.width * this.height;

        }

        calcArea2() {

            return this.width + this.height;

        }

    }

    class areaText extends area {

        constructor (width, height, text, value) {

            super(width, height);

            this.text = text;
            this.value = value;
            
        }

        showText() {
            console.log(`Text: ${this.text} | Value: ${this.value}`);
        }

    }

    const block = new areaText(15, 5, 'Hi!', 'Тема урока Class');

    block.showText();

    console.log(block.calcArea());

}());