import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {}

  @Get()
  public getAllTasks(): Task[] {
    return this.taskService.getTasks();
  }
  
  @Post()
  public createTask(@Body() body) {
    console.log('body', body);
  }

  @Post('other')
  public createTaskOther(
    @Body('title') title: string, 
    @Body('description') description: string) {

    console.log('title: ' + title + ', description:' + description);

    this.taskService.createTask(title, description);
  }

}
