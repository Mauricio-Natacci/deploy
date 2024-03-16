import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  getHello(@Res() res: Response) {
    res.json({ message: 'Hello World Updated!!!' });
  }
}
