import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome agent Alexander to the Umbrella Character Management System!';
  }
}
