System.set('@angular/platform-browser-dynamic', System.newModule(ng.platformBrowserDynamic));
System.set('@angular/core', System.newModule(ng.core));
System.set('@angular/platform-browser', System.newModule(ng.platformBrowser));

SystemJS.import('main')
  .then(null)
  .catch(err => console.error(err));