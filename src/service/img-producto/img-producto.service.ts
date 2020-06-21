import { Injectable } from '@nestjs/common';
import { ImgProductoRepository } from 'src/modules/img-producto/img-producto.repository';

@Injectable()
export class ImgProductoService {
    constructor(private repository:ImgProductoRepository){}
}
