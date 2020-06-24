import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { User } from "../user/user.entity";
import { RolOperacion } from "../rol-operacion/rol-operacion.entity";


@Entity('rol')
export class Rol extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idrol:number;

    @Column({type:'varchar', nullable:false, length:25})
    nombre:string;
    
    @Column({type: 'date', nullable:false})
    fecha: Date;

    @Column({type: 'time', nullable:false})
    hora:Date;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @CreateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @OneToMany(() => User, user => user.rol)
    user: User[];

    @OneToMany(type => RolOperacion, roloperacion => roloperacion.rol)
    roloperacions: RolOperacion[];
}