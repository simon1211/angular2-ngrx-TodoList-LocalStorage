import {Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import * as fromModel from '../app.models';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent implements OnChanges {
    private filtered;
    private filteredText;

    @Input('todos') todos;
    @Input('filter') filter;
    @Output('complete') completeTodo = new EventEmitter();
    @Output('uncomplete') uncompleteTodo = new EventEmitter();
    @Output('onUpdate') onUpdate = new EventEmitter();
   // @Output('delete') deleteTodo = new EventEmitter();


    ngOnChanges() {
        switch (this.filter) {
            case fromModel.TodoStatus.all:
                this.filtered = this.todos;
                this.filteredText = 'All';
                break;
            case fromModel.TodoStatus.pending:
                this.filtered = this.todos.filter(todo => !todo.completed);
                this.filteredText = 'Pending';
                break;
            case fromModel.TodoStatus.complete:
                this.filtered = this.todos.filter(todo => todo.completed);
                this.filteredText = 'Completed';
                break;
            default:
                this.filter = fromModel.TodoStatus.all;
                this.filteredText = 'All';
                this.ngOnChanges();
                break;
        }

        this.onUpdate.emit(this.todos);
    }
}