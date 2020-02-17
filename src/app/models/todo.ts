export class Todo {
  username: string;
  tasklist: string;
  done: string;
  late: string;
  intime: string;

  constructor(
    username: string = '',
    tasklist: string = '',
    done: string = '',
    late: string = '',
    intime: string = ''
  ) {
    this.username = username;
    this.tasklist = tasklist;
    this.done = done;
    this.late = late;
    this.intime = intime;
  }
}
