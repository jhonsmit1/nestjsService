import { 
    IsString,
    IsBoolean,
    MinLength
} from "class-validator";

export class CreateTaskDTO {
    @IsString()
    @MinLength(1)
    title: string;
    
    @IsBoolean()
    status: boolean;
}

export interface UpdateTaskDTO{
    title?: string;
    status?: boolean;
}