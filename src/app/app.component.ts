/*
 * NOTE:
 * =====
 * This file holds the container's logic (i.e. smart component):
 *  - read from store and delegate to dumb components
 *  - handle component-triggered events
 * */

//our root app component
import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import * as fromModel from './app.models';
import {AppSelectors} from './app.selectors';
import {TodoAppActions} from './app.actions';
import 'rxjs/rx';
import 'rxjs/add/operator/filter';
import {TodosService} from "./services/todos.service";

@Component({
    selector: 'todo-app',
    providers: [],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private todos$;
    private filter$;

    constructor(private store: Store<any>,
                private appActions: TodoAppActions,
                private appSelectors: AppSelectors,
    private todoService: TodosService) {
    }

    ngOnInit() {
        this.store.dispatch(this.appActions.appInit());
        this.initialiseStreams();
    }

    initialiseStreams() {
        this.todos$ = this.store.let(this.appSelectors.todos());
        this.filter$ = this.store.let(this.appSelectors.filter());
    }

    updateTodos(todos) {
        this.todoService.updateTodos(todos);
    }

    showAll() {
        this.store.dispatch(this.appActions.filter(fromModel.TodoStatus.all))
    }

    showPending() {
        this.store.dispatch(this.appActions.filter(fromModel.TodoStatus.pending))
    }

    showComplete() {
        this.store.dispatch(this.appActions.filter(fromModel.TodoStatus.complete))
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

    /*deleteTodo(todo) {
        this.store.dispatch(this.appActions.deleteTodo(todo));
    }*/

}