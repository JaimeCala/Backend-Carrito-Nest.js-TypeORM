import { BaseEntity, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Operacion } from "../operacion/operacion.entity";
import { User } from "../user/user.entity";

@Entity('useroperacion')
export class UserOperacion extends  BaseEntity{

    @PrimaryGeneratedColumn('increment')
    iduseroperacion:number;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;
    
    @ManyToOne(type => Operacion, operacion => operacion.useroperacions)
    operacions: Operacion;

    @ManyToOne(type => User, user => user.useroperacions)
    user: User;


}