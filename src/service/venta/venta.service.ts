import { Injectable } from '@nestjs/common';
import { VentaRepository } from 'src/modules/venta/venta.repository';

@Injectable()
export class VentaService {
    constructor(private repository:VentaRepository){}
}
