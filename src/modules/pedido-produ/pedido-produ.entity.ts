import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Pedido } from "../pedido/pedido.entity";
import { Producto } from "../producto/producto.entity";

@Entity('pedidoproducto')
export class PedidoProducto extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idpedidoproducto:number;

    @Column()
    cantidad:number;

    /*@Column({type:'varchar', length:100,nullable:true})
    descripcion:string;*/

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;    

    @ManyToOne(() => Pedido, pedido => pedido.pedidoproductos)
    @JoinColumn({name:'idpedido'})
    pedido:Pedido;

    @ManyToOne(() => Producto, producto => producto.pedidoproductos)
    @JoinColumn({name:'idproducto'})
    producto: Producto;

}