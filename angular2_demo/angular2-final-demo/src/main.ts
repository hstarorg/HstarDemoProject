import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

let platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);