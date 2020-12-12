import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { LoginRepository } from 'src/modules/login/login.repository';
import { Login } from 'src/modules/login/login.entity';
import { getRepository } from 'typeorm';
import { User } from 'src/modules/user/user.entity';
import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class LoginService {
    constructor(private repository:LoginRepository){}


    /*async searchUsername(username: string ): Promise<Login>{
        const userpass=  await this.repository.find( loginusername.username ===username );

    }*/
    //Extrae username de la base de datos
    async searchUsername(username: string):Promise<Login[]>{
        const userpass = await this.repository.find({where:{username}});
        return userpass;

    }

        //show logins
        async getLogins(): Promise<Login[]>{
        const logins: Login[] = await this.repository.find({relations:["user"]});
        return logins;
    }
    //mostrando un solo login
    async getLogin(id: number): Promise<Login>{
        if(!id){
            throw new BadRequestException('Necesita un id');
        }

        const login: Login = await this.repository.findOne(id);

        return login;
    }
  

    async createLogin(login: Login): Promise<any>{

        const {username} = login;
        //extraemos o verificamos si el username existe
        const userExists = await this.repository.findOne({where:{username}});
        if(userExists){
            throw new ConflictException('Username ya existe');
        }

        //insertando el usuario que se registro ultimo
        const user = await getRepository(User).createQueryBuilder("user").select("MAX(user.idusuario)", "max");
        const maximo = await user.getRawOne();
        //asignando rol
        login.user = maximo.max;
        //encriptando password y save
        const salt = await genSalt(10);
        login.password= await hash(login.password, salt);
        await this.repository.save(login);

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
