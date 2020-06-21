import { Injectable } from '@nestjs/common';
import { ClienteRepository } from 'src/modules/cliente/cliente.repository';

@Injectable()
export class ClienteService {
    constructor(private repository:ClienteRepository){}
}
