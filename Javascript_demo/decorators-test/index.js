var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var HttpMethods;
(function (HttpMethods) {
    HttpMethods[HttpMethods["GET"] = 0] = "GET";
    HttpMethods[HttpMethods["POST"] = 1] = "POST";
    HttpMethods[HttpMethods["PUT"] = 2] = "PUT";
    HttpMethods[HttpMethods["DELETE"] = 3] = "DELETE";
})(HttpMethods || (HttpMethods = {}));
var p1 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('ok');
            resolve('ok');
        }, 1000);
    });
};
var p2 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('ok');
            reject('ok2');
        }, 1000);
    });
};
var HomeController = (function () {
    function HomeController() {
    }
    HomeController.prototype.getIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all([p1(), p2()])];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error('error', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomeController.prototype.postIndex = function () {
        console.log('Post Index');
    };
    return HomeController;
}());
__decorate([
    Route('/test', HttpMethods.GET)
], HomeController.prototype, "getIndex");
__decorate([
    Route('/', HttpMethods.POST)
], HomeController.prototype, "postIndex");
HomeController = __decorate([
    RoutePrefix('/test/v1')
], HomeController);
function Route(routePath, method) {
    if (method === void 0) { method = HttpMethods.GET; }
    return function (target, key, descriptor) {
        console.log(routePath, method, target, key, descriptor);
    };
}
function RoutePrefix(routePrefix) {
    return function (target) {
        console.log('prefix', target);
        target.prototype.routePrefix = routePrefix;
    };
}
console.log(Object.keys(HomeController.prototype));
var home = new HomeController();
console.log(home.getIndex());
