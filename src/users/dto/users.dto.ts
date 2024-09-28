import { 
    IsString,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    Max
} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Max(100)
    age:number;

}
