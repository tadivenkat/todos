import { Component } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TODOs App';
  tasks: Task[] = [];

  addTask(taskRef: any) {
    this.tasks.push(new Task(taskRef.value, false));
    taskRef.value = '';
    taskRef.focus();
  }

  removeTask(task: Task) {
    const response = confirm(
      `Are you sure you want to remove the task "${task.title}"?`
    );
    if (response) {
      this.tasks = this.tasks.filter((eachTask) => eachTask !== task);
    }
  }
}
