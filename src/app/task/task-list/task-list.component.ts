import { Component, inject } from '@angular/core';
import { TaskListStateService } from '../services/task-list-state.service'; // Adjust the path as necessary

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styles: ``,
})
export default class TaskListComponent {
  taskState = inject(TaskListStateService);

  EditarTask(id: number) {
      window.open("/task-form/" + id, "_self");
  }

  EliminarTask(id: number) {
    const res = confirm('¿Estás seguro de que deseas eliminar esta tarea?');
    if (res) {
      this.taskState.state.deleteTask(id.toString());

     }
  }
}
