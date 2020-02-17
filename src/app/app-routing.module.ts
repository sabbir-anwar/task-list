import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {TaskListComponent} from './task_list/task-list/task-list.component';


const routes: Routes = [
  {
    path: 'tasklist',
    component: TaskListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
