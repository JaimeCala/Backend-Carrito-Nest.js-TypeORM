import { Injectable } from '@nestjs/common';
import { UnidadProducRepository } from 'src/modules/unidad-produc/unidad-produc.repository';

@Injectable()
export class UnidadProducService {
    constructor(private repository:UnidadProducRepository){}
}
