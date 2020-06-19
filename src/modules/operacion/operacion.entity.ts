import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Modulo } from "../modulo/modulo.entity";
import { UserOperacion } from "../user-operacion/user-operacion.entity";

@Entity('operacion')
export class Operacion extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idoperacion:number;

    @Column({type:'varchar', length:25, nullable:false})
    nombreoperacion:string;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @ManyToOne(type => Modulo, modulo => modulo.operacions)
    modulos: Modulo;

    @OneToMany(type => UserOperacion, useroperacion => useroperacion.operacions  )
    useroperacions: UserOperacion[];

}