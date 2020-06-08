import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid/dist';


@Injectable()
export class TasksService {

  private tasks: Task[] = [];

  constructor() {

  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }

    this.tasks.push(task);

    return task;
  }

}
