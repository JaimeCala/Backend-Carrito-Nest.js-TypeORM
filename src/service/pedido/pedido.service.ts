import { Injectable, BadRequestException } from '@nestjs/common';
import { PedidoRepository } from 'src/modules/pedido/pedido.repository';
import { Pedido } from 'src/modules/pedido/pedido.entity';
import { getManager, getRepository } from 'typeorm';
import { Cliente } from 'src/modules/cliente/cliente.entity';

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

        /*const {cliente} = pedido;
    
        console.log("===============esto es lo que viene como id usuario"+cliente);
        
        const existCliente = await getRepository(Cliente).createQueryBuilder("cliente")
                                                      .select("cliente.idcliente","cliente")
                                                      .where({user:cliente});
                                                      
        const idcli = await existCliente.getRawOne();
        pedido.cliente = idcli.cliente;
        console.log("-------------------------->>>>>>>>>>>>>>>>>>>>>"+idcli.cliente);*/
        
        console.log("----------------SE VA INSERTAR DATOS A PEDIDOS-------------");
        pedido.cliente= pedido.cliente;
        const pedidoprodu= await this.repository.save(pedido);
        console.log("----------------se insertooo-------------"+pedidoprodu.idpedido);
        return pedidoprodu;
       

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
