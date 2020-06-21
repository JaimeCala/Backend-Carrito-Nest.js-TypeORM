import { Injectable } from '@nestjs/common';
import { RolRepository } from 'src/modules/rol/rol.repository';

@Injectable()
export class RolService {
    constructor(private repository:RolRepository){}
}
