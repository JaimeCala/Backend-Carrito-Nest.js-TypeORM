import { Injectable } from '@nestjs/common';
import { VendedorRepository } from 'src/modules/vendedor/vendedor.repository';

@Injectable()
export class VendedorService {
    constructor(private repository:VendedorRepository){}
}
