import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoRepository } from './producto.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ProductoRepository])],
})
export class ProductoModule {}
