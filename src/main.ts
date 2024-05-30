/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVppR2Nbe05xdl9FZ1ZQRGYuP1ZhSXxXdkBiWX9ac3VQTmlbV0M=');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
