export class Task {
  constructor(public title = '', public isDone = false) {}
  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}
