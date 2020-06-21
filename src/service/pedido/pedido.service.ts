import { Injectable } from '@nestjs/common';
import { PedidoRepository } from 'src/modules/pedido/pedido.repository';

@Injectable()
export class PedidoService {
    constructor(private repository:PedidoRepository){}
}
