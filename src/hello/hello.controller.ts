import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard, tokenGuard } from './guards/auth/auth.guard';

@Controller('/')
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({
            message: 'Hola Bienviendos'
        })
    }

    @Get('notfound')
    // @HttpCode(404)
    notFoundPage(@Res() res: Response) {
        return res.status(400).send('Bad Request');
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 14
    }

    @Get('active/:status')
    @UseGuards(tokenGuard)
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        return status
    }

    @Get('greet')
    @UseGuards(AuthGuard,tokenGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        return `Hola ${query.name} tu edad es ${query.age + 10}`;
    }
}
