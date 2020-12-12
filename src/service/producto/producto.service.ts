import { Injectable, BadRequestException } from '@nestjs/common';
import { ProductoRepository } from 'src/modules/producto/producto.repository';
import { Producto } from 'src/modules/producto/producto.entity';
import { getManager } from 'typeorm';
import { CategoriaService } from '../categoria/categoria.service';
import { Categoria } from 'src/modules/categoria/categoria.entity';
import { ImgProducto } from 'src/modules/img-producto/img-producto.entity';

@Injectable()
export class ProductoService {
    constructor(private repository:ProductoRepository){}

     //Me entrega todos las productos
  async getProductos(): Promise<any> {
    const producto: Producto[] = await this.repository.find({
      //select:["nombre","paterno"],
      relations: ['imgproductos','unidadproductos'],
    });
    return producto;
  }

  //Me entrega sola una producto especifica

  async getProducto(idproducto: number): Promise<Producto> {
    if (!idproducto) {
      throw new BadRequestException('Necesita un id');
    }

    const producto: Producto = await this.repository.findOne({
      
      relations: ['imgproductos','unidadproductos','categoria'],
      where:{idproducto},
    });

    return producto;
  }

  async postCateProduUniImg(idcategoria: number): Promise<any> {

    if (!idcategoria) {
      throw new BadRequestException('Necesita un id categoria');
    }
    const cate= await getManager()
                            .createQueryBuilder(Producto, "producto")
                            .addSelect('categoria.nombre', 'nombrecate')
                            .addSelect('producto.nombre','produnombre')
                            .addSelect('imgproducto.nombreimgprodu','imgprodu')
                            .innerJoin(Categoria,"categoria","categoria.idcategoria = producto.idcategoria")
                            .innerJoin(ImgProducto,"imgproducto","producto.idproducto=imgproducto.idproducto")
                            .where('categoria.idcategoria= :idcategoria',{idcategoria:idcategoria})
                            .getRawMany()

      return cate
   
    }

  //crea una nueva producto

  async createProducto(producto: Producto): Promise<Producto> {

   producto.nombre = producto.nombre;
   producto.descripcion = producto.descripcion;
   producto.stock = producto.stock;
   producto.minimo = producto.minimo;
   producto.maximo = producto.maximo;
   producto.vencimiento = producto.vencimiento;
   producto.precio = producto.precio;
   producto.disponible = producto.disponible;
   producto.peso = producto.peso;
   producto.fecha = producto.fecha;
   producto.categoria = producto.categoria;

    const savedProducto: Producto = await this.repository.save(producto);

    return savedProducto;
  }

  //Elimina una producto especifica

  async deleteProducto(id: number): Promise<any> {
    const deleteProducto = await this.repository.delete(id);
    return deleteProducto;
  }

  //actualiza una producto especifica

  async updateProducto(id: number, producto: Producto): Promise<any> {
    const updateProducto = await this.repository.update(id, producto);
    return updateProducto;
  }
}
