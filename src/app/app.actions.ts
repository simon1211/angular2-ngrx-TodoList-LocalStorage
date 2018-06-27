/*
* NOTE:
* =====
* This file holds the module's available actions definitions, to use across the app
* (pending the module is imported to wherever it is used)
* */

import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoAppActions {

    static APP_INIT = '[app] App Initialized';

    appInit(): Action {
        return {
            type: TodoAppActions.APP_INIT
        };
    }

    static EMPTY_LOCAL_STORAGE = '[app] Empty local storage';

    emptyLocalStorage(): Action {
        return {
            type: TodoAppActions.EMPTY_LOCAL_STORAGE
        };
    }

    static ADD_TODO = '[app] Add Todo';

    addTodo(newTodo): Action {
        return {
            type: TodoAppActions.ADD_TODO
        };
    }

    static COMPLETE_TODO = '[app] Complete Todo';

    completeTodo(todo): Action {
        return {
            type: TodoAppActions.COMPLETE_TODO
        };
    }

    static UNCOMPLETE_TODO = '[app] unComplete Todo';

    uncompleteTodo(todo): Action {
        return {
            type: TodoAppActions.UNCOMPLETE_TODO
        };
    }

    /*static DELETE_TODO = '[app] Delete Todo';
    deleteTodo(todo): Action {
		return {
      type: TodoAppActions.DELETE_TODO,
      payload: todo
	  };
    }*/

    static FILTER = '[app] Filter';

    filter(status): Action {
        return {
            type: TodoAppActions.FILTER
        };
    }

    static GET_TODOS_FROM_LOCAL_STORAGE = '[app] Get Todos From Local Storage';

    getTodosFromLocalStorage(todos): Action {
        return {
            type: TodoAppActions.GET_TODOS_FROM_LOCAL_STORAGE
        };
    }
}