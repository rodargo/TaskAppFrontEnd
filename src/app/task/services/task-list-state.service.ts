import { Injectable, inject } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { map, Observable, switchMap } from 'rxjs';
import { ITask } from '../models/task.model';
import { TaskService } from './task.service';

interface State {
  confirmDelete: number;
  tasks: ITask[];
  status: 'loading' | 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class TaskListStateService {
  private taskService = inject(TaskService);
  private initialState: State = {
    confirmDelete: 0,
    tasks: [],
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.taskService
        .getTaskList()
        .pipe(map((tasks) => ({ tasks, status: 'loading' as const }))),
    ],
    actionSources: {
      deleteTask: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.taskService.deleteTask(id)),
          map((data) => ({ confirmDelete: data, status: 'success' as const })),
        ),
    },
  });
}
