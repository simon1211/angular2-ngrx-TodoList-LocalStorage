import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnChanges {
    private filtered;

    @Input('todos') todos;
    @Input('filter') filter;
    @Output('complete') completeTodo = new EventEmitter();
    @Output('uncomplete') uncompleteTodo = new EventEmitter();
    @Output('delete') deleteTodo = new EventEmitter();

    ngOnChanges() {
        switch (this.filter) {
            case 'ALL':
                this.filtered = this.todos;
                break;
            case 'PENDING':
                this.filtered = this.todos.filter(todo => !todo.completed)
                break;
            case 'COMPLETE':
                this.filtered = this.todos.filter(todo => todo.completed)
                break;
            default:
                this.filter = 'ALL';
                this.ngOnChanges();
                break;
        }
        if (this.todos.length) {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }
        else {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }
    }
}