import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuloRepository } from './modulo.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ModuloRepository])],
})
export class ModuloModule {}
