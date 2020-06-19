import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaRepository } from './categoria.repository';

@Module({
    imports: [TypeOrmModule.forFeature([CategoriaRepository])],
})
export class CategoriaModule {}
