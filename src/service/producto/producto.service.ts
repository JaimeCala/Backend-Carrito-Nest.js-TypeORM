import { Injectable } from '@nestjs/common';
import { ProductoRepository } from 'src/modules/producto/producto.repository';

@Injectable()
export class ProductoService {
    constructor(private repository:ProductoRepository){}
}
