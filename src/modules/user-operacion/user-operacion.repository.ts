import { Repository, EntityRepository } from "typeorm";
import { UserOperacion } from "./user-operacion.entity";

@EntityRepository(UserOperacion)
export class UserOperacionRepository extends Repository<UserOperacion>{

}