import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoRepository } from './pedido.repository';

@Module({
    imports: [TypeOrmModule.forFeature([PedidoRepository])],
})
export class PedidoModule {}
