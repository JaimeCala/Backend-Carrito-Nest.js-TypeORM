import { Controller, Get, Post, Delete, Put, Param, Body, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CategoriaService } from 'src/service/categoria/categoria.service';
import { Categoria } from 'src/modules/categoria/categoria.entity';

@Controller('categoria')
export class CategoriaController {

    constructor(private readonly service: CategoriaService){}
  
    @Get('/categorias')
    async getCategorias( ): Promise<Categoria[]>{
        const categorias = await this.service.getCategorias();
        return categorias;
        
    }

   
    

    @Get('/:idcategoria')
    async getCategoria(@Param('idcategoria', ParseIntPipe) idcategoria: number): Promise<Categoria>{
        const categoria = await this.service.getCategoria( idcategoria);
        return categoria;
    }


    //crea categoria

    @Post('/createCategoria')
    async createCategoria(@Body() categoria: Categoria):Promise<Categoria>{
        const createdCategoria = await this.service.createCategoria(categoria);
        return createdCategoria;
    }

    @Delete('/:idcategoria')
    async deletecategoria(@Param('idcategoria', ParseIntPipe) idcategoria: number): Promise<void>{
        const categoriadelete = await this.service.deleteCategoria(idcategoria);
        if(!categoriadelete) throw new NotFoundException('No hay registro con ese idcategoria para eliminar');
        return categoriadelete;

    }
    @Put('/:idcategoria')
    async updatecategoria(@Param('idcategoria', ParseIntPipe) idcategoria: number , @Body() categoria: Categoria): Promise<Categoria>{
        const updatecategoria = await this.service.updateCategoria(idcategoria, categoria);
        return updatecategoria;
    }
    
}
