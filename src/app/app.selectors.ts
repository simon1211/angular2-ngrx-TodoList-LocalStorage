/*
 * NOTE:
 * =====
 * This file serves as an extra layer between reading from any parts of the store and providing a view-model to the different components
 * */


import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/rx';
import * as fromModel from './app.models';

@Injectable()
export class AppSelectors {
    // You can use the constructor to inject services here
    constructor(
        private store: Store<any>
    ) {}

    todos() {
        return (store: Observable<any>) =>
            this.store.select(fromModel.store.todos);
    }

    filter() {
        return (store: Observable<any>) =>
            this.store.select(fromModel.store.visibilityFilter);
    }

}

