import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgCategoriaRepository } from './img-categoria.repository';
import { ImgCategoriaService } from 'src/service/img-categoria/img-categoria.service';
import { ImgCategoriaController } from 'src/controller/img-categoria/img-categoria.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ImgCategoriaRepository])],
    providers: [ImgCategoriaService],
    controllers: [ImgCategoriaController]
})
export class ImgCategoriaModule {}
