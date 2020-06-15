import { TaskStatus } from "../task.model";
import { IsNotEmpty } from "class-validator"

export class GetTasksFilterDto {
    
    status: TaskStatus;
    search: string;
}