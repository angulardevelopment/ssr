import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  bootstrapApplication,
  provideClientHydration, withEventReplay,
  withIncrementalHydration
} from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routeConfig } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
};

// Hydration is an initial load optimization
bootstrapApplication(AppComponent, {
  providers: [
    // provideClientHydration(withEventReplay(), withIncrementalHydration()),
    provideRouter(routeConfig),
    provideHttpClient(),
  ]
});

// if (document.readyState === 'complete') {
//   bootstrap();
// } else {
//   document.addEventListener('DOMContentLoaded', bootstrap);
// }

