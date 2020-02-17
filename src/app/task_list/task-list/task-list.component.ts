import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  todo = [
    {
      username: 'Sabbir',
      task: [
        new Task('Thailand Tour', 'Feb 10, 2020'),
        new Task('India Tour', 'Feb 10, 2020')
      ],
      done: [
        new Task('gangtok Tour', 'Feb 10, 2020'),
        new Task('Nepal Tour', 'Feb 10, 2020')
      ],
      late: [
        new Task('Sundarban', 'Feb 10, 2020'),
        new Task('Nijhum Dip', 'Feb 10, 2020')
      ],
      intime: [
        new Task('Radission Buffet', 'Feb 10, 2020'),
        new Task('Puran Dhaka tour', 'Feb 10, 2020')
      ],
    },
    {
      username: 'Anwar',
      task: [
        new Task('Exam prep', '22-02-2020'),
        new Task('Exam prep', '16-02-2020')
      ],
      done: [
        new Task('Exam prep', '22-02-2020'),
        new Task('Exam prep', '16-02-2020')
      ],
      late: [
        new Task('Exam prep', '22-02-2020'),
        new Task('Exam prep', '16-02-2020')
      ],
      intime: [
        new Task('Exam prep', '22-02-2020'),
        new Task('Exam prep', '16-02-2020')
      ],
    },
    {
      username: 'Protik',
      task: [
        new Task('Exam prep', '22-02-2020'),
        new Task('Exam prep', '16-02-2020')
      ],
      done: [
        new Task('Exam prep', '22-02-2020'),
        new Task('Exam prep', '16-02-2020')
      ],
      late: [
        new Task('Exam prep', '22-02-2020'),
        new Task('Exam prep', '16-02-2020')
      ],
      intime: [
        new Task('Exam prep', '22-02-2020'),
        new Task('Exam prep', '16-02-2020')
      ],
    }
  ];
  selectedUser = null;
  userName = '';
  message = '';
  taskName = '';
  taskDate = '';
  constructor() { }

  ngOnInit() {
  }

  selectUser() {
    console.log('clicked');
    for (let i=0; i < this.todo.length ; i++) {
      if (this.todo[i].username === this.userName) {
        this.selectedUser = this.todo[i];
        console.log(this.selectedUser);
      }
    }

    if (this.selectedUser === null) {
      this.message = 'No User Found';
      console.log(this.message);
    }
  }

  addTask() {
    console.log(this.taskName);
    console.log(this.taskDate);
    this.selectedUser.task.push(new Task(this.taskName, this.taskDate));
    console.log(this.todo);
  }

}
