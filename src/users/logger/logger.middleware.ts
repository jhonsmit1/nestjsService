import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    console.log({Url:req.originalUrl, method: req.method,timerq:new Date(),status:res.statusCode});
    
    next();
  }
}


// @Injectable()
// export class AuthenticatedMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     const timeRq = new Date();
//     const authorizationHeader = req.headers.authorization;
    
//     const token = authorizationHeader ? authorizationHeader.replace('Bearer ', '') : null;
    
//     const decoded = verifyAuth(token);

//     if (decoded.status == 1) {
//       req['tokenData'] = decoded.data; 
//       next(); 
//     } else {
//error response

//     }
//   }
// }