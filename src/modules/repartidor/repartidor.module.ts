import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepartidorRepository } from './repartidor.repository';

@Module({
    imports: [TypeOrmModule.forFeature([RepartidorRepository])],
})
export class RepartidorModule {}
