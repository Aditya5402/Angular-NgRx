import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { coursesReducer } from './courses/state/courses.reducer';
import { appReducer } from './states/app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore(appReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
