import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

/*
//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app.component';
import {provideStore} from '@ngrx/store'
import {todos, visibilityFilter} from './app.reducers';

bootstrap(App, [
  provideStore({
    todos,
    visibilityFilter
  })  
])
.catch(err => console.error(err));*/