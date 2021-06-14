import { Injectable, BadRequestException } from '@nestjs/common';
import { PedidoProduRepository } from 'src/modules/pedido-produ/pedido-produ.repository';
import { PedidoProducto } from 'src/modules/pedido-produ/pedido-produ.entity';
import { Pedido } from 'src/modules/pedido/pedido.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class PedidoProduService {
    constructor(private repository:PedidoProduRepository){}

        //show pedidoproductos
    async getPedidoProductos(): Promise<PedidoProducto[]>{
        const pedidoproductos: PedidoProducto[] = await this.repository.find({
            relations:['producto']
        });
        return pedidoproductos;
    }
    //mostrando un solo pedidoproducto
    async getPedidoProducto(id: number): Promise<PedidoProducto[]>{
        if(!id){
            throw new BadRequestException('Necesita un id');
        }

        const pedidoproducto: PedidoProducto[] = await this.repository.find({
            relations:['producto'],
            where:{pedido:id }
        });

        return pedidoproducto;
    }
  

    async createPedidoProducto(pedidoproducto: PedidoProducto): Promise<any>{

        //insertando el usuario que se registro ultimo
        const idpedido = await getRepository(Pedido).createQueryBuilder("pedido").select("MAX(pedido.idpedido)", "max");
        const maximo = await idpedido.getRawOne();
        const idpedidos = maximo.max;
       
        console.log("-------------esto es el id pedido de pedido------"+idpedidos);
        console.log("-------------esto es el id pedido de pedido------"+maximo.max);
      
         for(const indice in pedidoproducto)
         {
            pedidoproducto.cantidad= pedidoproducto[indice].cantidad;
            pedidoproducto.producto = pedidoproducto[indice].producto;
            //pedidoproducto.pedido = pedidoproducto[indice].pedido;
            pedidoproducto.pedido= pedidoproducto[indice].pedido=maximo.max;//se suma +1 porque la consulta se realiza despues de la insercion
            //pedidoproducto.pedido= pedidoproducto[indice].pedido=maximo.max;
            //pedidoproducto.pedido = maximo.max;
            console.log("-------------esto es el id pedido de pedido------"+idpedidos);
            console.log("-------------esto es el id pedido de pedido------"+maximo.max);
         
             await this.repository.save(pedidoproducto);
         }
         return pedidoproducto;
         
     
     

    }

    /*async createPedidoProducto(cart: string): Promise<any>{

        const pedidoproducto = new PedidoProducto();
        if(cart!=null)
        {
            console.log("---------------------probando----------"+cart);
        }else{console.log("no hay nadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");}
       
       const obj=  Object.keys(cart);

         for(const indice in obj)
         {
            pedidoproducto.cantidad= pedidoproducto[indice].cantidad;
            pedidoproducto.producto = pedidoproducto[indice].producto;
            pedidoproducto.pedido = pedidoproducto[indice].pedido;
             await this.repository.save(pedidoproducto);
         }
         return obj;
     
     

    }*/

    async deletePedidoProducto(id: number): Promise<any>{
        const deletePedidoProducto = await this.repository.delete(id);
        return  deletePedidoProducto;
        
        
    } 

    async updatePedidoProducto(id: number, pedidoproducto: PedidoProducto): Promise<any>{

        const updatePedidoProducto = await this.repository.update(id,pedidoproducto);
        return  updatePedidoProducto;

    }
}
