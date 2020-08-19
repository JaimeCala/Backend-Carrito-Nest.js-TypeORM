import { Injectable, ConflictException, BadRequestException } from '@nestjs/common';
import { ClienteRepository } from 'src/modules/cliente/cliente.repository';
import { Cliente } from 'src/modules/cliente/cliente.entity';

@Injectable()
export class ClienteService {
    constructor(private repository:ClienteRepository){}

    //Extrae username de la base de datos
    async searchUsername(username: string):Promise<Cliente[]>{
        const userpass = await this.repository.find({where:{username}});
        return userpass;

    }

        //show clientes
    async getClientes(): Promise<Cliente[]>{
        const clientes: Cliente[] = await this.repository.find();
        return clientes;
    }
    //mostrando un solo cliente
    async getCliente(id: number): Promise<Cliente>{
        if(!id){
            throw new BadRequestException('Necesita un id');
        }

        const cliente: Cliente = await this.repository.findOne(id);

        return cliente;
    }
  

    async createCliente(cliente: Cliente): Promise<any>{

        //insertando a cliente campos
        cliente.user = cliente.user ;
        await this.repository.save(cliente);

    }

    async deleteCliente(id: number): Promise<any>{
        const deleteCliente = await this.repository.delete(id);
        return  deleteCliente;
        
        
    } 

    async updateCliente(id: number, cliente: Cliente): Promise<any>{

        const updateCliente = await this.repository.update(id,cliente);
        return  updateCliente;

    }
}
