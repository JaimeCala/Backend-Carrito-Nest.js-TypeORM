import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginRepositoty } from './login.repository';

@Module({
    imports: [TypeOrmModule.forFeature([LoginRepositoty])],
})
export class LoginModule {}
