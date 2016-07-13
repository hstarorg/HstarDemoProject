((angula, window) => {
  angular.module('module2', [])
    .config(['$routeProvider', ($routePrivder) => {
      $routePrivder.when('/module2/index', {
        template: 'Module2 -> Index'
      });
    }])
})(window.angular, window);