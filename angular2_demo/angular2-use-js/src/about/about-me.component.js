((ng, app) => {
  'use strict';

  class AboutMeComponent {
    constructor() {
      console.log('about me init');
    }
  }

  AboutMeComponent.annotations = [
    new ng.core.Component({
      selector: 'demo-about-me',
      template: `
<h1>About Me</h1>
      `
    })
  ];

  app.AboutMeComponent = AboutMeComponent;
  window.DemoApp = app;

})(window.ng, window.DemoApp || {});