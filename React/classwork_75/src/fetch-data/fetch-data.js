export default class FetchData {
	
    constructor() {
		this._urlBase = 'https://reqres.in/api';
	}

	async fetchData (url) {
		const res = await fetch(`${this._urlBase}${url}`);
	
		if (!res.ok) {
			throw new Error(`Ссылка ${url} сломана.. Статус ${res.status}`);
		}
	
		const json = await res.json();
	
		return json;
	}

	getAllPost() {
		return this.fetchData('/users?page=1');
	}

	getPostById(id) {
		return this.fetchData(`/users/${id}`);
	}
}

// const get = new getData();

// get.getAllPost()
// 	.then((res) => {
// 		res.forEach(element => console.log(element.title));
// 	});

// get.getPostById(10)
// 	.then((res) => console.log(res));