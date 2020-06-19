import { Repository, EntityRepository } from "typeorm";
import { Login } from "./login.entity";

@EntityRepository(Login)
export class LoginRepositoty extends Repository<Login>{

}