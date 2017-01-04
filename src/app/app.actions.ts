import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoAppActions {

static ADD_TODO = '[app] Add Todo';
    addTodo(newTodo): Action {
      return {
	  type: TodoAppActions.ADD_TODO,
      payload: newTodo
	  };
    }
	
	static UPDATE_TODO = '[app] Update Todo';
    updateTodo(todo): Action {
		return {
      type: TodoAppActions.UPDATE_TODO,
      payload: todo
	  };
    }
	
  static COMPLETE_TODO = '[app] Complete Todo';
    completeTodo(todo): Action {
		return {
      type: TodoAppActions.COMPLETE_TODO,
      payload: todo
	  };
    }

    static UNCOMPLETE_TODO = '[app] unComplete Todo';
    uncompleteTodo(todo): Action {
        return {
            type: TodoAppActions.UNCOMPLETE_TODO,
            payload: todo
        };
    }
    
    static DELETE_TODO = '[app] Delete Todo';
    deleteTodo(todo): Action {
		return {
      type: TodoAppActions.DELETE_TODO,
      payload: todo
	  };
    }
    
    static SHOW = '[app] show';
    show(filter): Action {
		return {
      type: TodoAppActions.SHOW,
      payload: filter
	  };
    }

    static GET_CACHE = '[app] Get Todos From Cache';
    getCache(data): Action {
        return {
            type: TodoAppActions.GET_CACHE,
            payload: data
        };
    }
}