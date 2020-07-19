import { Injectable, BadRequestException } from '@nestjs/common';
import { CategoriaRepository } from 'src/modules/categoria/categoria.repository';
import { Categoria } from 'src/modules/categoria/categoria.entity';

@Injectable()
export class CategoriaService {
    
  constructor(private repository: CategoriaRepository) {}

  //Me entrega todos las categorias
  async getCategorias(): Promise<any> {
    const categoria: Categoria[] = await this.repository.find({
      //select:["nombre","paterno"],
      //relations: ['ImgCategoria'],
    });
    return categoria;
  }

  //Me entrega sola una categoria especifica

  async getCategoria(id: number): Promise<Categoria> {
    if (!id) {
      throw new BadRequestException('Necesita un id');
    }

    const categoria: Categoria = await this.repository.findOne(id);

    return categoria;
  }

  //crea una nueva categoria

  async createCategoria(categoria: Categoria): Promise<Categoria> {

    const savedCategoria: Categoria = await this.repository.save(categoria);

    return savedCategoria;
  }

  //Elimina una categoria especifica

  async deleteCategoria(id: number): Promise<any> {
    const deleteCategoria = await this.repository.delete(id);
    return deleteCategoria;
  }

  //actualiza una categoria especifica

  async updateCategoria(id: number, categoria: Categoria): Promise<any> {
    const updateCategoria = await this.repository.update(id, categoria);
    return updateCategoria;
  }
}
