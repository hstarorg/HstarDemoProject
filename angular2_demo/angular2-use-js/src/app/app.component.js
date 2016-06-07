((ng, app) => {
  'use strict';

  let ROUTER_DIRECTIVES = ng.router.ROUTER_DIRECTIVES;
  let ROUTER_PROVIDERS = ng.router.ROUTER_PROVIDERS;

  class AppComponent {
    constructor() {
      console.log('app init');
    }
  }

  AppComponent.annotations = [
    new ng.core.Component({
      selector: 'demo-app',
      template: `
<h3>Angular2 Router Test</h3>
<a [routerLink]="['/home']">Home</a>
<a [routerLink]="['/about']">About</a> 
<router-outlet></router-outlet>
      `,
      directives: [ROUTER_DIRECTIVES],
      providers: [ROUTER_PROVIDERS]
    }),
    new ng.router.Routes([{
      path: '/home',
      component: app.HomeComponent
    }, {
      path: '/about',
      component: app.AboutComponent
    }])
  ];

  app.AppComponent = AppComponent;
  window.DemoApp = app;
})(window.ng, window.DemoApp || {});