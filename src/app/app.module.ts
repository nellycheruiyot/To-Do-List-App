import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
// import { CompletenessPipeComponent } from './completeness-pipe/completeness-pipe.component';
import { CompletenessPipe } from './completeness.pipe';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    // CompletenessPipeComponent,
    CompletenessPipe,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
