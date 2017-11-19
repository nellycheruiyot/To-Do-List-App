import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // public tasks: Task[] = [
  //   new Task("Create To-Do List app.", 0),
  //   new Task("Learn Kung Fu.", 1),
  //   new Task("Rewatch all the Lord of the Rings movies.", 2),
  //   new Task("Do the laundry.", 3)
  // ];
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }

  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  constructor() { }

  ngOnInit() {
  }

}
