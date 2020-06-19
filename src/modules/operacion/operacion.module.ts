import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperacionRepository } from './operacion.repository';

@Module({
    imports: [TypeOrmModule.forFeature([OperacionRepository])],
})
export class OperacionModule {}
