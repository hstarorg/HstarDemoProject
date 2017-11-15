import About from './About.vue';

class AboutCtrl {
  constructor() {
    this.init();
  }

  init() {
    new Vue({
      el: '#page-about',
      render: h => h(About)
    });
  }
}
angular.module('app')
  .controller('AboutCtrl', [AboutCtrl]);
