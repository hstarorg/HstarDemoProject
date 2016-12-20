enum HttpMethods {
	GET,
	POST,
	PUT,
	DELETE
}

const p1 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('ok');
			resolve('ok');
		}, 1000);
	});
};

const p2 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('ok');
			reject('ok2');
		}, 1000);
	});
};

@RoutePrefix('/test/v1')
class HomeController {
	constructor() {

	}

	@Route('/test', HttpMethods.GET)
	async getIndex() {
		try {
			let result = await Promise.all([p1(), p2()]);
			console.log(result);
			// let a1 = await p1();
			// let a2 = await p2();
			// console.log(a1, a2);
		} catch (e) {
			console.error('error', e);
		}
	}

	@Route('/', HttpMethods.POST)
	postIndex() {
		console.log('Post Index');
	}
}

function Route(routePath: string, method: HttpMethods = HttpMethods.GET) {
	return (target, key, descriptor) => {
		console.log(routePath, method, target, key, descriptor);
	}
}

function RoutePrefix(routePrefix: string) {
	return (target) => {
		console.log('prefix', target);
		target.prototype.routePrefix = routePrefix;
	}
}

console.log(Object.keys(HomeController.prototype));

let home = new HomeController(); 
console.log(home.getIndex()); 