import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Producto } from "../producto/producto.entity";


@Entity('unidadproducto')
export class UnidadProducto extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idunidadproducto:number;

    @Column({type:'varchar', length:20})
    valor:string;
    
    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @ManyToOne(type => Producto, producto => producto.unidadproductos)
    producto: Producto;
}