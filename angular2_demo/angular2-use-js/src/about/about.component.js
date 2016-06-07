((ng, app) => {
  'use strict';
  let ROUTER_DIRECTIVES = ng.router.ROUTER_DIRECTIVES;

  let AboutUserComponent = app.AboutUserComponent;
  let AboutMeComponent = app.AboutMeComponent;

  class AboutComponent {
    constructor() {
      this.id = 1;
      console.log('about init');
    }

  }

  AboutComponent.annotations = [
    new ng.core.Component({
      selector: 'demo-about',
      template: `
  <h1>About</h1>
  <a [routerLink]="['/home']">Go to Home</a>
  <a [routerLink]="['./user']">Go to About User</a>
  <a [routerLink]="['./me']">Go to About Me</a>
  <router-outlet></router-outlet>
      `,
      directives: [ROUTER_DIRECTIVES]
    }),
    new ng.router.Routes([{
      path: '/me',
      component: AboutMeComponent
    }, {
      path: '/user',
      component: AboutUserComponent
    }])
  ];

  app.AboutComponent = AboutComponent;
  window.DemoApp = app;

})(window.ng, window.DemoApp || {});