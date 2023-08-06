import { Component, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
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
