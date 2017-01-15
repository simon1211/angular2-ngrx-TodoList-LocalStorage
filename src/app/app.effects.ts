/*
 * NOTE:
 * =====
 * This file will hold any 'todos' async operations (to be called prior to state update in reducer, using the received response)
 * */

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {TodoAppActions} from './app.actions';
import {TodosService} from "./services/todos.service";

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private todosService: TodosService,
    private appActions: TodoAppActions) { }

    @Effect()
    appInit$ = this.actions$
        .ofType(TodoAppActions.APP_INIT)
        .map(() => {
            return this.todosService.getTodos()
        })
        .map (response => {
            if (response && response.length) {
                return this.appActions.getTodosFromLocalStorage(response);
            }
            else { return this.appActions.emptyLocalStorage(); }
        })
}
