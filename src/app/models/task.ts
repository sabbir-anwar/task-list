export class Task {
  taskname: string;
  date: string;

  constructor(
    taskname: string = '',
    date: string = ''
  ) {
    this.taskname = taskname;
    this.date = date;
  }
}
