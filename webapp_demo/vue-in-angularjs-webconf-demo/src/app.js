angular.module('app', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        templateUrl: 'pages/home/home.html'
      })
      .when('/about', {
        controller: 'AboutCtrl',
        controllerAs: 'vm',
        templateUrl: 'pages/about/about.html'
      })
  }]);
