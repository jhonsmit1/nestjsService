
import { Injectable } from "@nestjs/common";
import { User,tasksInterface } from "./types";


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
    getTask(query:any): tasksInterface[] {
        console.log("🚀 ~ TasksService ~ getTask ~ query:", query)
        return this.tasks   
    }

    //una unica tarea
    getTaksid(id:number):tasksInterface[] {
        return this.tasks.find(taks => taks.id === id)
    }

    testing() {
        return 'test!!!'
    }

    createTask(task:any) {
        this.tasks.push({
            ...task,
            id:this.tasks.length+1,
        });
        // console.log(this.tasks);
        
        return {task}
    }

    updateTask() {
        return 'Actualizando tareas';
    }

    deleteTask() {
        return 'Eliminando tareas';
    }
    updateTaskStatus() {
        return 'Actualizando el estado de una tarea';
    }
}