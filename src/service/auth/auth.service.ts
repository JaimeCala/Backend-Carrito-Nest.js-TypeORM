import { Injectable, NotFoundException, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtService} from '@nestjs/jwt'
import { AuthRepository } from 'src/modules/auth/auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from 'src/modules/login/login.entity';
import { compare } from 'bcryptjs';
import { IJwtPayload } from 'src/auth/jwt-payload.interface';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository,
        private readonly _jwtService: JwtService,
    ){ }

    
        //inicio de sesion
       
    async validateUser(login: Login): Promise<{token: string}>{
        const {username, password} = login;
        //verifica que haya el username
        const userLogin: Login = await this._authRepository.findOne({
                where: {username},
        });

        if(!userLogin)
        {
            throw new NotFoundException('Tu usuario es incorrecto');
        }

        //compara password
        const isMatch = await compare(password, userLogin.password);
        
        if(!isMatch){
            throw new UnauthorizedException('Usuario o contraseña incorrecta');
        }

        const payload: IJwtPayload ={
            idlogin: userLogin.idlogin,
            username: userLogin.username,
        }

        //generamos token
        const token = await this._jwtService.sign(payload);

        return {token};



    }


}
