(function() {

	const get_list_product = require("./module/get_list_product"),
		add_to_card = require("./module/add_to_cart"),
		count_product = require("./module/count_product"),
		delete_product = require("./module/delete_product"),
		total_price = require("./module/total_price");

	get_list_product();
	add_to_card(delete_product, total_price, count_product);

}());