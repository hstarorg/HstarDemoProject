((angular, window, document) => {
  'use strict';

  let parseRoute = (routes, url) => {
    let result = null;
    angular.forEach(routes, (route) => {
      if (route.regexp !== null && route.regexp !== undefined) {
        let m = route.regexp.exec(url);
        if (m !== null) {
          result = m;
        }
      }
    });
    return result;
  };

  let loadCssByModuleName = (moduleName, allowCreate) => {
    //todo,it's not important in this demo.
  };

  let moduleLoaderFunc = ($location, $route, $rootScope, $timeout, $ocLazyload) => {
    return {
      use: () => {
        $rootScope.$on('$locationChangeStart', ($event) => {
          let path = $location.path();
          let search = $location.search();
          let pathArr = path.match(/\/([^\/]*)/i);
          //Invalid path(Don't process)
          if (path.toLowerCase() === '/404' || pathArr.length < 2) {
            return;
          }
          let moduleName = pathArr[1]; //Get module name
          if (moduleName) {
            // if module exists, don't process
            if ($ocLazyload.moduleExists(moduleName)) {
              return;
            }
            //Dynamic load module.
            $event.preventDefault();
            $ocLazyload.load([
              `/modules/${moduleName}/app.js?rnd=${Math.random()}`
            ]).then(() => {
              //Load module successfully.
              if (parseRoute($route.routes, path)) {
                $location.search(search);
                if ($location.path() === path) {
                  $route.reload();
                } else {
                  $location.path(path);
                }
              } else {
                $location.path('/404');
              }
            }, (err) => {
              console.log(err);
              $timeout(() => {
                $rootScope.$apply(() => {
                  $location.path('/404').replace();
                });
              })
            });
          }
        });
      }
    }
  };

  angular.module('app', ['ngRoute', 'oc.lazyLoad'])
    .provider('appModuleLoader', function () {
      let self = this;
      self.$get = ['$location', '$route', '$rootScope', '$timeout', '$ocLazyLoad', moduleLoaderFunc];
    })
    .config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      }).hashPrefix('!');

      $routeProvider.when('/404', {
        template: '404 Not Found.'
      });

      $routeProvider.otherwise({
        redirectTo: '/404'
      });
    }])
    .run(['appModuleLoader', (appModuleLoader) => {
      appModuleLoader.use();
    }]);

  angular.bootstrap(document, ['app']);
})(window.angular, window, document);
