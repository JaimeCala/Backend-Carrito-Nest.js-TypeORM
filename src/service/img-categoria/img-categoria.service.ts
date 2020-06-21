import { Injectable } from '@nestjs/common';
import { ImgCategoriaRepository } from 'src/modules/img-categoria/img-categoria.repository';

@Injectable()
export class ImgCategoriaService {
    constructor(private repository:ImgCategoriaRepository){}
}
