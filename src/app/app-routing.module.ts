import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {TaskListComponent} from './task_list/task-list/task-list.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: 'tasklist',
    component: TaskListComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : '',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
