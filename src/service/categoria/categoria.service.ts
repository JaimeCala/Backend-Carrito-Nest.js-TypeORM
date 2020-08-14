import { Injectable, BadRequestException } from '@nestjs/common';
import { CategoriaRepository } from 'src/modules/categoria/categoria.repository';
import { Categoria } from 'src/modules/categoria/categoria.entity';
import { getManager } from 'typeorm';
import { Producto } from 'src/modules/producto/producto.entity';
import { ImgProducto } from 'src/modules/img-producto/img-producto.entity';
import { UnidadProducto } from 'src/modules/unidad-produc/unidad-produc.entity';

@Injectable()
export class CategoriaService {
    
  constructor(private repository: CategoriaRepository) {}

  //Me entrega todos las categorias
  async getCategorias(): Promise<any> {
    const categoria: Categoria[] = await this.repository.find({
      //select:["nombre","paterno"],
      relations: ['imgcategorias'],
    });
    return categoria;
  }

  //Me entrega sola una categoria especifica

  async getCategoria(id: number): Promise<Categoria> {
    if (!id) {
      throw new BadRequestException('Necesita un id');
    }

    const categoria: Categoria = await this.repository.findOne(id,{
      
      relations:['imgcategorias',],
    
    });

    return categoria;
  }

   /* async postCateProdu(idcategoria: number): Promise<Categoria> {
    if (!idcategoria) {
      throw new BadRequestException('Necesita un id categoria');
    }

    const producto: Categoria = await this.repository.findOne({
      select:['idcategoria'],
      relations: ['productos','productos.imgproductos','productos.unidadproductos'],
      where:{idcategoria},
    });*/

    async postCateProdu(idcategoria: number): Promise<any> {


    if (!idcategoria) {
      throw new BadRequestException('Necesita un id categoria');
    }
    const cate= await getManager()
                            .createQueryBuilder(Categoria, "categoria")
                            //.addSelect('categoria.nombre', 'nombrecate')
                            .addSelect('producto.idproducto','idprodu')
                            .addSelect('producto.nombre','produnombre')
                            .addSelect('producto.precio','produprecio')
                            .addSelect('producto.peso','produpeso')
                            .addSelect('imgproducto.idimgproducto','imgidprodu')
                            .addSelect('imgproducto.nombreimgprodu','imgnombreprodu')
                            .addSelect('unidadprodu.idunidadproducto','iduniprodu')
                            .addSelect('unidadprodu.valor','univalor')
                            .innerJoin(Producto,"producto","categoria.idcategoria =producto.idcategoria")
                            .innerJoin(ImgProducto,"imgproducto","producto.idproducto=imgproducto.idproducto")
                            .innerJoin(UnidadProducto,"unidadprodu","producto.idproducto=unidadprodu.idproducto")
                            .where('categoria.idcategoria= :idcategoria',{idcategoria:idcategoria})
                            .getRawMany()

      return cate
  
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
