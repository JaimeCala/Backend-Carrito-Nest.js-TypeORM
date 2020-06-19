import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';

@Module({
    imports:[TypeOrmModule.forFeature([AdminRepository])],
})
export class AdminModule {}
