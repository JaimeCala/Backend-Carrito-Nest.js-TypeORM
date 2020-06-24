import { Injectable } from '@nestjs/common';
//import { LoginService } from '../login/login.service';

@Injectable()
export class AuthService {
    
   // constructor(private readonly loginService: LoginService){}

   /* async validaUser(username: string, pass: string): Promise<any>{
        const login = await this.loginService.findOne(username);
        if(login && login.password===pass){
            const {password, ...result} = login;
            return result;
        }
        return null;
    }*/
}
