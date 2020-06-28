import { Controller, Post, Body, UseGuards, } from '@nestjs/common';
import { AuthService } from 'src/service/auth/auth.service';
import { Login } from 'src/modules/login/login.entity';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {

    constructor (private readonly _authService: AuthService){}

        
    @Post('/inicioSesion')
    async iniSesion(@Body() login: Login): Promise<any>{
               return this._authService.validateUser(login);

    }
}
