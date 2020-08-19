import { Injectable, BadRequestException } from '@nestjs/common';
import { PedidoRepository } from 'src/modules/pedido/pedido.repository';
import { Pedido } from 'src/modules/pedido/pedido.entity';

@Injectable()
export class PedidoService {
    constructor(private repository:PedidoRepository){}

        //show pedidos
    async getPedidos(): Promise<Pedido[]>{
        const pedidos: Pedido[] = await this.repository.find();
        return pedidos;
    }
    //mostrando un solo pedido
    async getPedido(id: number): Promise<Pedido>{
        if(!id){
            throw new BadRequestException('Necesita un id');
        }

        const pedido: Pedido = await this.repository.findOne(id);

        return pedido;
    }
  

    async createPedido(pedido: Pedido): Promise<any>{

        //insertando el usuario que se registro ultimo
        pedido.cliente = pedido.cliente;
       
        await this.repository.save(pedido);

    }

    async deletePedido(id: number): Promise<any>{
        const deletePedido = await this.repository.delete(id);
        return  deletePedido;
        
        
    } 

    async updatePedido(id: number, pedido: Pedido): Promise<any>{

        const updatePedido = await this.repository.update(id,pedido);
        return  updatePedido;

    }
}
