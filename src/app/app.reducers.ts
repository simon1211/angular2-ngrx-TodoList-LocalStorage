/*
 * NOTE:
 * =====
 * This file will hold any of this module's action handling (i.e. store updates)
 * */


import {TodoAppActions} from './app.actions';
import {TodoStatus} from './app.models';

export interface AppState {
    todos: Array<any>;
    visibilityFilter: number;
}

const initialState: AppState = {
    todos: [],
    visibilityFilter: TodoStatus.all
};


export const todos = (state = initialState.todos, {type, payload}) => {
    switch (type) {
        case TodoAppActions.ADD_TODO:
            let nextId: number;
            if (state[0]) {
                nextId = state[state.length - 1].id + 1;
            }
            else {
                nextId = 1;
            }
            return state.concat([Object.assign({}, payload, {id: nextId, completed: false})]);

        case TodoAppActions.COMPLETE_TODO:
            return state.map(todo => {
                return todo.id !== payload.id ?
                    todo :
                    Object.assign({}, todo, {completed: true})
            });

        case TodoAppActions.UNCOMPLETE_TODO:
            return state.map(todo => {
                return todo.id !== payload.id ?
                    todo :
                    Object.assign({}, todo, {completed: false})
            });

        /*case TodoAppActions.DELETE_TODO:
         return state.filter(todo => todo.id !== payload.id);
         */
        case TodoAppActions.GET_TODOS_FROM_LOCAL_STORAGE: {
            return state.concat(...payload);
        }

        default:
            return state;
    }
};

export const visibilityFilter = (state = (todo) => true, {type, payload}) => {
    switch (type) {
        case TodoAppActions.FILTER:
            return state = payload;
    }
};
