import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/service/user/user.service';
import { UserController } from 'src/controller/user/user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
