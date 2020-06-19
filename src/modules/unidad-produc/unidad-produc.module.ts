import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadProducRepository } from './unidad-produc.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UnidadProducRepository])],
})
export class UnidadProducModule {}
