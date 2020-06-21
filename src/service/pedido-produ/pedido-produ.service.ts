import { Injectable } from '@nestjs/common';
import { PedidoProduRepository } from 'src/modules/pedido-produ/pedido-produ.repository';

@Injectable()
export class PedidoProduService {
    constructor(private repository:PedidoProduRepository){}
}
