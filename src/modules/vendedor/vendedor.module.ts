import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendedorRepository } from './vendedor.repository';

@Module({
    imports: [TypeOrmModule.forFeature([VendedorRepository])],
})
export class VendedorModule {}
