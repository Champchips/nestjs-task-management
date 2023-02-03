import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
@Injectable()
export class TasksService {
  private task: Task[] = [];

  getAllTasks(): Task[] {
    return this.task;
  }
}
