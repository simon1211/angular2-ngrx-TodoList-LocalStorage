/*
 * NOTE:
 * =====
 * This file will hold any 'todos' backend operations/3rd party libraries (basically you should be able to plug & play a different service/implementation)
 * */

import {Injectable} from '@angular/core';
import * as fromModel from '../app.models';

@Injectable()
export class TodosService {
    getTodos() {
        let cache = localStorage.getItem(fromModel.store.todos);
        if (cache && cache.length) {
            return JSON.parse(localStorage.getItem(fromModel.store.todos));
        }
        else return [];
    }

    updateTodos(todos) {
        localStorage.setItem(fromModel.store.todos, JSON.stringify(todos));
    }
}
