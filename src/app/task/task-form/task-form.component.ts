import { Component, effect, inject, input } from '@angular/core';
import { TaskFormStateService } from '../services/task-form-state.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styles: ``,
})
export default class TaskFormComponent {
  taskFormStateService = inject(TaskFormStateService).state;
  id = input.required<string>();

  constructor() {
    effect(() => {
      this.taskFormStateService.getById(this.id());
    });
  }


  regresar() {
    window.open('/task-list', '_self');
  }
}
