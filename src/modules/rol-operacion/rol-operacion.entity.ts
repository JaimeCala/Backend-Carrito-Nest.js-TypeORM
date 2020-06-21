import { BaseEntity, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Operacion } from "../operacion/operacion.entity";
import { Rol } from "../rol/rol.entity";

@Entity('roloperacion')
export class RolOperacion extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idroloperacion:number;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;
    
    @ManyToOne(type => Operacion, operacion => operacion.roloperacions)
    operacions: Operacion;

    @ManyToOne(type => Rol, rol => rol.roloperacions)
    rol: Rol;
}