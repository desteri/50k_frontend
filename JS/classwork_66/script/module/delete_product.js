function delete_product(total_price, count_product) {
    
	"use strict";
	let clickTrash = document.querySelectorAll(".trash");
    
	let funDelete = function(event) {
        
		event.preventDefault();

		this.parentNode.parentNode.remove();

		total_price();
		count_product();
        
	};

	for (var i = 0; i < clickTrash.length; i++) {

		clickTrash[i].addEventListener("click", funDelete, false);

	}
}

module.exports = delete_product;