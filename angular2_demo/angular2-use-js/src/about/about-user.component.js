((ng, app) => {
  'use strict';

  class AboutUserComponent {
    constructor() {
      console.log('about user init');
      //  console.log(segment.parameters, segment, segment.getParam('id'));
    }
  }

  AboutUserComponent.annotations = [
    new ng.core.Component({
      selector: 'demo-about-user',
      template: `
<h1>About User</h1>
      `
    })
  ];

  //AboutUserComponent.parameters = ['RouteSegment'];
  // AboutUserComponent.parameters = [ng.core.Inject('RouteSegment')];

  app.AboutUserComponent = AboutUserComponent;
  window.DemoApp = app;

})(window.ng, window.DemoApp || {});