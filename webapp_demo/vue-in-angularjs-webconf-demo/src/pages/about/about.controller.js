import About from './About.vue';

class AboutCtrl {
  constructor($element) {
    debugger
    setTimeout(() => {
      new Vue({
        el: '#about',
        render: h => h(About)
      });
    });
  }
}
angular.module('app')
  .controller('AboutCtrl', ['$scope', '$element', AboutCtrl]);
