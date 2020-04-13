import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: any [] = [];
  todoTitle: string;
  todoId = 0;

  constructor(private modaldService: NgbModal) {

  }
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', isDone: false },

    ];
  }
  addTodo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }
  deleteTodo(todo: any) {
// show
this.modaldService.open(ConfirmationModalComponent);
// if the result is yes
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

}
