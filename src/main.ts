/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVJyWmFZfVpgcF9FZVZQQWYuP1ZhSXxXdkdiWn9ac3FQT2JbUkU=');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
