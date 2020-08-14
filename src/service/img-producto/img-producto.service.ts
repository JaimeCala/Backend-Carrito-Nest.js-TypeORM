import { ImgProductoRepository } from "src/modules/img-producto/img-producto.repository";
import { Injectable } from "@nestjs/common";
import { ImgProducto } from "src/modules/img-producto/img-producto.entity";
import { getRepository } from "typeorm";
import { Producto } from "src/modules/producto/producto.entity";

@Injectable()
export class ImgProductoService {
  constructor(private repository: ImgProductoRepository) {}

   async getImgCates(): Promise<ImgProducto[]> {
   
    const imgCate:ImgProducto[] = await this.repository.find();
    return imgCate;
   

  }

  async createImgProducto(imgnombre: string, imglink: string, ): Promise<ImgProducto> {
    
    const imgproducto = new ImgProducto();

    
    const producto = await getRepository(Producto)
      .createQueryBuilder('producto')
      .select('MAX(producto.idproducto)', 'max');
    const maximo = await producto.getRawOne();
    //asignando id de la producto

    imgproducto.nombreimgprodu = imgnombre;
    imgproducto.linkimgprodu = imglink;
    imgproducto.producto = maximo.max;
    const savedImgcate = await this.repository.save(imgproducto);
    return savedImgcate;
   
  }

  /*async deleteUser(id: number): Promise<any> {
    const deleteUser = await this.repository.delete(id);
    return deleteUser;
  }

  async updateUser(id: number, user: User): Promise<any> {
    const updateUser = await this.repository.update(id, user);
    return updateUser;
  }*/
}
