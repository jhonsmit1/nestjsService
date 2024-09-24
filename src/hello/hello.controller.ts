import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { url } from 'inspector';

@Controller('/')
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({
            message: 'Hola Bienviendos'
        })
    }

}
