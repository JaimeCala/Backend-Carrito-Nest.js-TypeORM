import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { AuthController } from 'src/controller/auth/auth.controller';
import { AuthService } from 'src/service/auth/auth.service';
import { ConfigService } from 'src/config/config.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Configuration } from 'src/config/config.keys';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { ConfigModule } from 'src/config/config.module';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { RolRepository } from '../rol/rol.repository';
import { UserRepository } from '../user/user.repository';



@Module({
    imports: [
       TypeOrmModule.forFeature([AuthRepository,UserRepository]), 
       PassportModule.register({
           defaultStrategy: 'jwt',

       }),
       JwtModule.registerAsync({
           imports: [ConfigModule],
           inject: [ConfigService],
           useFactory: (config: ConfigService)=>{
               return{
                   secret: config.get(Configuration.JWT_SECRET),
                   signOptions: {
                       expiresIn: '3600s', // 1hora
                   },
               };
           },
       }),



],
    controllers: [AuthController],//poner passportModulo
    providers: [AuthService, ConfigService, JwtStrategy,LocalStrategy,], //poner localStrategy
    exports: [ JwtStrategy, PassportModule, AuthService], //se agrega authService
})
export class AuthModule {}
