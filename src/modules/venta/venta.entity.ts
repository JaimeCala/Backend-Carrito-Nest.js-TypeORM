import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Double, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { VendedorRepository } from "../vendedor/vendedor.repository";
import { Vendedor } from "../vendedor/vendedor.entity";
import { Pedido } from "../pedido/pedido.entity";

@Entity('venta')
export class Venta extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idventa:number;

    @Column({type:'varchar', nullable:false})
    estadopedido:string;

    @Column({type:'float', nullable:false})
    total:number;

    @Column()
    cantidad:number;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @ManyToOne(type => Vendedor, vendedor => vendedor.ventas)
    @JoinColumn({name:'idvendedor'})
    vendedor: Vendedor;

    @ManyToOne(type => Pedido, pedido => pedido.ventas)
    @JoinColumn({name:'idpedido'})
    pedido: Pedido;

    

}