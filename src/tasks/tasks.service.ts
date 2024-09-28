
import { Injectable, NotFoundException } from "@nestjs/common";
import { User, tasksInterface, taskInterfacebyId } from "./types";
import { CreateTaskDTO, UpdateTaskDTO } from "./dto/tasks.dto";


@Injectable()  //funciones que se pueden reutilziar en otra parte del codigo , metodos 
export class TasksService {

    //crear array
    private tasks = [];

    // getTask():User {
    //     return {
    //         name:'jhon smitt',
    //         age:25
    //     }
    // }
    getTask(query: any): tasksInterface[] {
        return this.tasks
    }

    //una unica tarea
    getTaksid(id: number): taskInterfacebyId[] | any {
        const result = this.tasks.find(task => task.id === id)
        if (!result) return new NotFoundException('Tarea no encontrada')
        return result
    }

    testing() {
        return 'test!!!'
    }

    createTask(task: CreateTaskDTO) {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        // console.log(this.tasks);

        return { task }
    }

    updateTask(task:UpdateTaskDTO) {
        return 'Actualizando tareas';
    }

    deleteTask() {
        return 'Eliminando tareas';
    }
    updateTaskStatus() {
        return 'Actualizando el estado de una tarea';
    }
}