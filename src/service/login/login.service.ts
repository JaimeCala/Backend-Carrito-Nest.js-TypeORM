import { Injectable, BadRequestException } from '@nestjs/common';
import { LoginRepository } from 'src/modules/login/login.repository';
import { Login } from 'src/modules/login/login.entity';

@Injectable()
export class LoginService {
    constructor(private repository:LoginRepository){}

        async getLogins(): Promise<Login[]>{
        const logins: Login[] = await this.repository.find();
        return logins;
    }

    async getLogin(id: number): Promise<Login>{
        if(!id){
            throw new BadRequestException('Necesita un id');
        }

        const login: Login = await this.repository.findOne(id);

        return login;
    }

    async createLogin(login: Login): Promise<Login>{
        const savedLogin: Login = await this.repository.save(login);
        return savedLogin;
    }

    async deleteLogin(id: number): Promise<any>{
        const deleteLogin = await this.repository.delete(id);
        return  deleteLogin;
        
        
    } 

    async updateLogin(id: number, login: Login): Promise<any>{

        const updateLogin = await this.repository.update(id,login);
        return  updateLogin;

    }
}
