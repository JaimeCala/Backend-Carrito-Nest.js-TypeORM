import { Injectable } from '@nestjs/common';
import { CategoriaRepository } from 'src/modules/categoria/categoria.repository';

@Injectable()
export class CategoriaService {
    constructor(private repository:CategoriaRepository){}
}
