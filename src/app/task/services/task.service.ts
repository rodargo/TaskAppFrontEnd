import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/services/base-http.service';
import { ITask, ITaskAddEdit } from '../models/task.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TaskService extends BaseHttpService {
  getTaskList(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.apiUrl}tasks/alltask`);
  }

  createTask(task: ITaskAddEdit): Observable<ITaskAddEdit> {
    return this.http.post<ITask>(`${this.apiUrl}/tasks/add`, task);
  }

  editTask(taskId: number, task: ITaskAddEdit): Observable<ITaskAddEdit> {
    return this.http.post<ITask>(`${this.apiUrl}/tasks/update`, {
      taskId,
      task,
    });
  }

  deleteTask(taskId: string): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}tasks/delete/${taskId}`);
  }

  getTaskById(taskId: string): Observable<ITask> {
    return this.http.get<ITask>(`${this.apiUrl}tasks/taskid/${taskId}`);
  }
}
