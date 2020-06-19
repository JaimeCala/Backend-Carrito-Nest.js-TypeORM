import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaRepository } from './venta.repository';

@Module({
    imports: [TypeOrmModule.forFeature([VentaRepository])],
})
export class VentaModule {}
