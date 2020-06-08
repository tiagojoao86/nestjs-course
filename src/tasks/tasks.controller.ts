import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {}

  @Get()
  public getAllTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get(':id')
  public getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }
  
  // @Post()
  // public createTask(@Body() body) {
  //   console.log('body', body);
  //   return this.taskService.createTask(body.title, body.description);
  // }

  @Post()
  public createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log('body', createTaskDto);
    return this.taskService.createTask(createTaskDto);
  }

  @Post('other')
  public createTaskOther(
    @Body('title') title: string, 
    @Body('description') description: string) {

    console.log('title: ' + title + ', description:' + description);

    return this.taskService.createTaskOther(title, description);
  }

}
