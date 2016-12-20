class J {
	constructor(dom) {
		this.dom = dom;

		this.init();
	}

	init() {
		this.data = {
			test: ''
		};

		this.data = new Proxy(this.data, {
			get(target, property, receiver) {
				return target[property];
			},
			set(target, property, value, receiver) {
				target[property] = value;
				document.getElementById('s1').innerText = value;
				return true;
			}
		});
		let self = this;
		document.getElementById('i1').addEventListener('input', function (e) {
			self.data.test = this.value;
		});
	}
}

new J(document.body);