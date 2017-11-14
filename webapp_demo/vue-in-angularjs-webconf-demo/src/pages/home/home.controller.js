(() => {
  class HomeCtrl {
    constructor() {
      this.hello = 'I\'m Home Page';
    }
  }
  angular.module('app')
    .controller('HomeCtrl', HomeCtrl);
})();
