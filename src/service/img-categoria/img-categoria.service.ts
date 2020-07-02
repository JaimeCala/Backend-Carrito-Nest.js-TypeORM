import { Injectable, BadRequestException, Res } from '@nestjs/common';
import { ImgCategoriaRepository } from 'src/modules/img-categoria/img-categoria.repository';
import { ImgCategoria } from 'src/modules/img-categoria/img-categoria.entity';

@Injectable()
export class ImgCategoriaService {
  constructor(private repository: ImgCategoriaRepository) {}

 

 /* async getImgCate(nombrigm: string ): Promise<any> {
    if (!nombrigm) {
      throw new BadRequestException('Necesita un id');
    }

    //const imgCate = await this.repository.find({ where: {idimgcategoria: id, root:'public/upload'} });

    const imgCate = await this.repository.find({ where: {nombreimgcategoria: nombrigm} });
    return imgCate;
   

  }*/

  async createImgCategoria(imgnombre: string, imglink:string ): Promise<ImgCategoria> {
    //const repo = await getRepository(Rol);
    //const defaulRole = await repo.findOne({ where: { nombre: 'GENERAL' } });
    //user.rol = defaulRole;
    const savedImgcate: ImgCategoria = await this.repository.save({nombreimgcategoria: imgnombre,linkimgcategoria: imglink});

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
