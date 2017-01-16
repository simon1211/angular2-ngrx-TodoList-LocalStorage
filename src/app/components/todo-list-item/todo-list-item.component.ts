import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: '[todo-list-item]',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent {
  @Input() todo;
  @Output() complete = new EventEmitter();
  @Output() uncomplete = new EventEmitter();
  //@Output('delete') destroy = new EventEmitter()
}
