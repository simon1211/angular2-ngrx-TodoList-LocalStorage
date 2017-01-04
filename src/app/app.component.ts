//our root app component
import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core'
import {Store} from '@ngrx/store'

import {TodoAppActions} from './app.actions';
import {todos, visibilityFilter} from './app.reducers';
import 'rxjs/rx';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'todo-app',
    providers: [],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    private todos;
    private filter;

    constructor(private store: Store<any>,
                private appActions: TodoAppActions) {
        this.todos = store.select('todos')
            .combineLatest(store.select('visibilityFilter'), (todos, visibilityFilter) => {
                return todos
            });

        this.filter = store.select('visibilityFilter')
            .combineLatest(store.select('todos'), (visibilityFilter, todos) => {
                return visibilityFilter
            });
    }

    ngOnInit() {
        let cache = localStorage.getItem("todos");
        if (cache !== null) {
            this.getCache(JSON.parse(localStorage.getItem("todos")));
        }
    }

    ngOnDestroy() {

    }

    addTodo(newTodo) {
        this.store.dispatch(this.appActions.addTodo(newTodo));
    }

    completeTodo(todo) {
        this.store.dispatch(this.appActions.completeTodo(todo));
    }

    uncompleteTodo(todo) {
        this.store.dispatch(this.appActions.uncompleteTodo(todo));
    }

    deleteTodo(todo) {
        this.store.dispatch(this.appActions.deleteTodo(todo));
    }

    show(filter) {
        this.store.dispatch(this.appActions.show(filter));
    }

    getCache(data) {
        this.store.dispatch(this.appActions.getCache(data));
    }

}