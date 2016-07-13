((angula, window) => {
  angular.module('module1', [])
    .config(['$routeProvider', ($routePrivder) => {
      $routePrivder.when('/module1/index', {
        template: 'Module1 -> Index'
      }).when('/module1/test', {
        template: 'Module1 -> Test'
      });
    }])
})(window.angular, window);