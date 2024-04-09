import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  // title = "ToDo APP"
  todos: Todo[] = [];
  inputTodo:string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first content',
        completed: false
      },
      {
        content: 'second content',
        completed: false
      },
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo(){
    if(this.inputTodo.trim()!==''){
      this.todos.push({
      content:this.inputTodo,
      completed:false
    });
    this.inputTodo='';
  }
}
}
