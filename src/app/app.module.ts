import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StoreModule, combineReducers} from '@ngrx/store'
import {compose} from "@ngrx/core/compose";
import {storeLogger} from "ngrx-store-logger";
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import {todos, visibilityFilter} from './app.reducers';
import {TodoAppActions} from './app.actions';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	StoreModule.provideStore(
        compose(
            storeLogger(),
            combineReducers
        )({todos, visibilityFilter})
    )
  ],
  providers: [TodoAppActions],
  bootstrap: [AppComponent]
})
export class AppModule { }