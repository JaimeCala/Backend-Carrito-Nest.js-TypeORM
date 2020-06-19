import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOperacionRepository } from './user-operacion.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserOperacionRepository])],
})
export class UserOperacionModule {}
