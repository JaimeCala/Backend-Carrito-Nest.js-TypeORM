import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,  OneToMany, ManyToOne } from "typeorm";
import { Venta } from "../venta/venta.entity";
import { PedidoProducto } from "../pedido-produ/pedido-produ.entity";
import { Cliente } from "../cliente/cliente.entity";
import { Repartidor } from "../repartidor/repartidor.entity";

@Entity('pedido')
export class Pedido extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idpedido:number;

    @Column({type:'varchar', length:100})
    latitud:string;

    @Column({type:'varchar', length:100})
    longitud:string;

    @Column({type:'date'})
    fecha:Date;

    @Column({type:'time'})
    hora:Date;
    
    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @OneToMany(type => Venta, venta => venta.pedido)
    ventas: Venta[];

    @OneToMany(type => PedidoProducto, pedidoproducto => pedidoproducto.pedido)
    pedidoproductos: PedidoProducto[];

    @ManyToOne(type => Cliente, cliente => cliente.pedidos)
    cliente: Cliente;

    @ManyToOne(type => Repartidor, repartidor => repartidor.pedidos)
    repartidor: Repartidor;
    
    
}