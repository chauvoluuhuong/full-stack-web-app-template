import { Injectable } from '@nestjs/common';
import { capitalize } from 'typescript-utils-package';
@Injectable()
export class AppService {
  getHello(): string {
    return capitalize('Hello World!');
  }
}
