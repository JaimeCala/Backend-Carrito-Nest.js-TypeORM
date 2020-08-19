import { Injectable, BadRequestException } from '@nestjs/common';
import { PedidoProduRepository } from 'src/modules/pedido-produ/pedido-produ.repository';
import { PedidoProducto } from 'src/modules/pedido-produ/pedido-produ.entity';

@Injectable()
export class PedidoProduService {
    constructor(private repository:PedidoProduRepository){}

        //show pedidoproductos
    async getPedidoProductos(): Promise<PedidoProducto[]>{
        const pedidoproductos: PedidoProducto[] = await this.repository.find();
        return pedidoproductos;
    }
    //mostrando un solo pedidoproducto
    async getPedidoProducto(id: number): Promise<PedidoProducto>{
        if(!id){
            throw new BadRequestException('Necesita un id');
        }

        const pedidoproducto: PedidoProducto = await this.repository.findOne(id);

        return pedidoproducto;
    }
  

    async createPedidoProducto(pedidoproducto: PedidoProducto): Promise<any>{

        //Object.keys(pedidoproducto);

         for(const indice in pedidoproducto)
         {
            pedidoproducto.cantidad= pedidoproducto[indice].cantidad;
            pedidoproducto.producto = pedidoproducto[indice].producto;
            pedidoproducto.pedido = pedidoproducto[indice].pedido;
             await this.repository.save(pedidoproducto);
         }
     
     

    }

    async deletePedidoProducto(id: number): Promise<any>{
        const deletePedidoProducto = await this.repository.delete(id);
        return  deletePedidoProducto;
        
        
    } 

    async updatePedidoProducto(id: number, pedidoproducto: PedidoProducto): Promise<any>{

        const updatePedidoProducto = await this.repository.update(id,pedidoproducto);
        return  updatePedidoProducto;

    }
}
