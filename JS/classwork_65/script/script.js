(function() {

    const get_list_product = require('./module/get_list_product'),
        add_to_card = require('./module/add_to_cart'),
        count_product = require('./module/count_product'),
        delete_product = require('./module/delete_product'),
        total_price = require('./module/total_price');

    get_list_product();
    add_to_card(delete_product, total_price, count_product);
    // count_product();
    // delete_product();
    // total_price();

}());

function* gen(n) {

    for (let i = 0; i < n; i++) {
        yield i;
    }

    // yield 'S';
    // yield 'a';
    // yield 'n';
    // yield 'n';
    // yield 'o';
}

const res = gen(5);

console.log(res.next());
console.log(res.next());

setTimeout(() => {
	console.log('My name is Sanno!');

	setTimeout(() => {
		console.log('I\'m your friend.');
	}, 0);
}, 0);

console.log('Hi!');