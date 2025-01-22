import { Injectable, inject } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { map, Observable, switchMap } from 'rxjs';
import { ITaskAddEdit } from '../models/task.model';
import { TaskService } from './task.service';

interface State {
  task: ITaskAddEdit;
  status: 'loading' | 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class TaskFormStateService {
  private taskService = inject(TaskService);

  private initialState: State = {
    task: {
      titulo: '',
      descripcion: '',
    },
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.taskService.getTaskById(id)),
          map((data) => ({ task: data, status: 'success' as const })),
        ),

      updateTask: (_state, $: Observable<{ id: number; task: ITaskAddEdit }>) =>
        $.pipe(
          switchMap(({ id, task }) => this.taskService.editTask(id, task)),
          map((data) => ({ task: data, status: 'success' as const })),
        ),
    },
  });
}

