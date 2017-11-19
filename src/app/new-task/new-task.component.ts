import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number) {
    var newTaskToAdd: Task = new Task(description, id);
    this.newTaskSender.emit(newTaskToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}
