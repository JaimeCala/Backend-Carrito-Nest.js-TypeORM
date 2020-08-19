import { Controller, Put, ParseIntPipe, Param, NotFoundException, Body, Delete, Post, Get } from '@nestjs/common';
import { PedidoService } from 'src/service/pedido/pedido.service';
import { Pedido } from 'src/modules/pedido/pedido.entity';

@Controller('pedido')
export class PedidoController {

    
constructor(private service:PedidoService){}

    @Get('/pedidos')
    async getPedidos( ): Promise<Pedido[]>{
        const pedidos = await this.service.getPedidos();
        return pedidos;
        
    }

    @Get('/:id')
    async getPedido(@Param('id', ParseIntPipe) id: number): Promise<Pedido>{
        const pedido = await this.service.getPedido( id);
        return pedido;
    }

    @Post('/create')
    async createPedido(@Body() pedido: Pedido):Promise<Pedido>{
        const createdPedido = await this.service.createPedido(pedido);
        return createdPedido;
    }

    @Delete('/:id')
    async deletepedido(@Param('id', ParseIntPipe) id: number): Promise<void>{
        const pedidodelete = await this.service.deletePedido(id);
        if(!pedidodelete) throw new NotFoundException('No hay registro con ese id para eliminar');
        return pedidodelete;

    }
    @Put('/:id')
    async updatepedido(@Param('id', ParseIntPipe) id: number , @Body() pedido: Pedido): Promise<Pedido>{
        const updatepedido = await this.service.updatePedido(id, pedido);
        return updatepedido;

    }
}
