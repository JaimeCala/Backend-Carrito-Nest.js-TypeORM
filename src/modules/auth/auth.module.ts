import { Module, Controller } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { AuthController } from 'src/controller/auth/auth.controller';
import { AuthService } from 'src/service/auth/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([AuthRepository])],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
