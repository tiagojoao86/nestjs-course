import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid/dist';
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {

  private tasks: Task[] = [];

  constructor() {

  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public getTaskById(id: string): Task {
    return this.tasks.find(task => task.id == id); 
  }

  public createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }

    this.tasks.push(task);

    return task;
  }

  public createMultiTask(createTaskDto: CreateTaskDto[]): Task[] {
    createTaskDto.forEach(item => {
      const { title, description } = item;

      const task: Task = {
        id: uuid(),
        title,
        description,
        status: TaskStatus.OPEN
      }
  
      this.tasks.push(task);

    });    

    return this.tasks;
  }

  public createTaskOther(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }

    this.tasks.push(task);

    return task;
  }

  /**
   * Solution 1 for Delete
   * @param id 
   */
  /*public deleteTask(id: string): Task[] {
    let task: Task = this.getTaskById(id);
    this.tasks.splice(this.tasks.indexOf(task), 1);

    return this.tasks;
  }*/

  /**
   * Solution 2 for Delete - Professor
   * @param id 
   */
  public deleteTask(id: string): void {    
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public updateTaskStatus(id: string, status: TaskStatus) {
    let task = this.getTaskById(id);
    task.status = status;
    return task;
  }

}
