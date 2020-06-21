import { Injectable } from '@nestjs/common';
import { RepartidorRepository } from 'src/modules/repartidor/repartidor.repository';

@Injectable()
export class RepartidorService {
    constructor(private repository:RepartidorRepository){}
}
