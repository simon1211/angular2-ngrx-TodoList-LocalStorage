import {TodoAppActions} from './app.actions';

export const todos = (state = [], {type, payload}) => {
    switch (type) {
        case TodoAppActions.ADD_TODO:
            let nextId: number;
            if (state[0]) {
                nextId = state[state.length-1].id +1;
            }
            else {
                nextId = 1;
            }
            return state.concat([Object.assign({}, payload, {id: nextId})]);
        case TodoAppActions.UPDATE_TODO:
            return state.map(todo => {
                return todo.id !== payload.id ?
                    todo :
                    Object.assign({}, todo, payload)
            });
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
                    Object.assign({}, todo, {completed: null})
            });

        case TodoAppActions.DELETE_TODO:
            return state.filter(todo => todo.id !== payload.id);

        case TodoAppActions.GET_CACHE:
            return payload.map(todo => {
                return todo.id !== payload.id ?
                    todo :
                    Object.assign({}, todo)
            });

        default:
            return state;
    }
};

export const visibilityFilter = (state = (todo) => true, {type, payload}) => {
    switch (type) {
        case TodoAppActions.SHOW:
            return state = payload;
    }
};
