import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from './cliente.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteRepository])],
})
export class ClienteModule {}
