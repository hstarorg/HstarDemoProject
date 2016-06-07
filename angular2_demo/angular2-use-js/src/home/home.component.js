((ng, app) => {
  'use strict';

  class HomeComponent {
    constructor() {
      console.log('home init');
    }
  }

  HomeComponent.annotations = [
    new ng.core.Component({
      selector: 'demo-app',
      template: `
<h1>Home</h1>
      `
    })
  ];

  app.HomeComponent = HomeComponent;
  window.DemoApp = app;

})(window.ng, window.DemoApp || {});