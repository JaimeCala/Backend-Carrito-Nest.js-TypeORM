import { Injectable, BadRequestException, Res } from '@nestjs/common';
import { ImgCategoriaRepository } from 'src/modules/img-categoria/img-categoria.repository';
import { ImgCategoria } from 'src/modules/img-categoria/img-categoria.entity';
import { Categoria } from 'src/modules/categoria/categoria.entity';
import { getRepository, Any } from 'typeorm';

@Injectable()
export class ImgCategoriaService {
  constructor(private repository: ImgCategoriaRepository) {}

   async getImgCates(): Promise<ImgCategoria[]> {
   
    const imgCate:ImgCategoria[] = await this.repository.find();
    return imgCate;
   

  }

  async createImgCategoria(imgnombre: string, imglink: string, ): Promise<ImgCategoria> {
    
    const imgcategoria = new ImgCategoria();

    const categoria = await getRepository(Categoria)
      .createQueryBuilder('categoria')
      .select('MAX(categoria.idcategoria)', 'max');
    const maximo = await categoria.getRawOne();
    //asignando id de la categoria

    imgcategoria.nombreimgcategoria = imgnombre;
    imgcategoria.linkimgcategoria = imglink;
    imgcategoria.categoria = maximo.max;
    const savedImgcate = await this.repository.save(imgcategoria);
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
