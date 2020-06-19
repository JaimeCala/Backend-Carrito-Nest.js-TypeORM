import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgCategoriaRepository } from './img-categoria.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ImgCategoriaRepository])],
})
export class ImgCategoriaModule {}
