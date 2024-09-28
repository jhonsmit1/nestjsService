export interface User {
    name:string;
    age:number;
}


export interface tasksInterface {
    title:string;
    status:boolean;
}

export interface taskInterfacebyId extends tasksInterface {
    id:number
}