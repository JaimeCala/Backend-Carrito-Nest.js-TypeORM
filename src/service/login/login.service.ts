import { Injectable } from '@nestjs/common';
import { LoginRepository } from 'src/modules/login/login.repository';

@Injectable()
export class LoginService {
    constructor(private repository:LoginRepository){}
}
