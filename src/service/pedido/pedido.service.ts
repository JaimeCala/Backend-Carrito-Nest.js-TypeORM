import { Injectable, BadRequestException } from '@nestjs/common';
import { PedidoRepository } from 'src/modules/pedido/pedido.repository';
import { Pedido } from 'src/modules/pedido/pedido.entity';
import { getManager } from 'typeorm';
import { Cliente } from '../../modules/cliente/cliente.entity';
import { User } from '../../modules/user/user.entity';


@Injectable()
export class PedidoService {
    constructor(private repository:PedidoRepository){}

        //show pedidos
    async getPedidos(): Promise<Pedido[]>{
        const pedidos: Pedido[] = await this.repository.find({
            order: {idpedido: 'DESC'}
        });
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

      //mostrando un solo pedido
    async getPedidoRealizados(idusuario: number): Promise<Pedido[]>{
        if(!idusuario){
            throw new BadRequestException('Necesita un idusuario');
        }

        
            const pedidoscli= await getManager()
                                    .createQueryBuilder(Pedido, "pedido")
                                    .addSelect('pedido.idpedido', 'idpedido')
                                    .addSelect('pedido.comentario','comentario')
                                    .addSelect('pedido.precio','precio')
                                    .addSelect('pedido.fecha','fecha')
                                    .addSelect('pedido.hora','hora')
                                    .addSelect('pedido.estado','estado')
                                    .innerJoin(Cliente,"cliente","cliente.idcliente = pedido.idcliente")
                                    .innerJoin(User,"user","user.idusuario = cliente.idusuario")
                                    .where('user.idusuario = :idusuario',{idusuario:idusuario})
                                    .getRawMany()

            return pedidoscli
    
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

    async updatePedido(id: number): Promise<any>{

        const  pedido = new Pedido();
        const estadoAbierto = 'ABIERTO'
        const resultEstado = await this.repository.findOne(id,{where:{estado:estadoAbierto}});

        if(resultEstado){
            return;
        }else{
            pedido.estado = estadoAbierto;
  
            const updatePedido = await this.repository.update(id,pedido);
            return  updatePedido;
        }
        
        

    }
     async updatePedidoEnviado(id: number): Promise<any>{

        const  pedido = new Pedido();
        const estadoAbierto = 'ENVIADO'
        //const resultEstado = await this.repository.findOne(id,{where:{estado:estadoAbierto}});

        //if(resultEstado){
           // return;
        //}else{
            pedido.estado = estadoAbierto;
  
            const updatePedido = await this.repository.update(id,pedido);
            return  updatePedido;
        //}
        
        

    }
}
