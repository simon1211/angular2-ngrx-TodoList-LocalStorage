import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTodoComponent {
  private alert: boolean;
  @Output() create = new EventEmitter();
  saveTodo(el){
    if (!el.value) {
      this.alert = true;
      return false;
    }
    this.create.emit({text: el.value,time: Date.now()});
    el.value = '';
    this.alert = false;
  }
}
