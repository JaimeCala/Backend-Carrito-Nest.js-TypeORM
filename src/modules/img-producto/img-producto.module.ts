import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgProductoRepository } from './img-producto.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ImgProductoRepository])],
})
export class ImgProductoModule {}
