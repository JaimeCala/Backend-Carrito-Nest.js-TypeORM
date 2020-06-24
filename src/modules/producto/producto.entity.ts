import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Double, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { PedidoProducto } from "../pedido-produ/pedido-produ.entity";
import { UnidadProducto } from "../unidad-produc/unidad-produc.entity";
import { ImgProducto } from "../img-producto/img-producto.entity";
import { Categoria } from "../categoria/categoria.entity";


@Entity('producto')
export class Producto extends  BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idproducto:number;

    @Column({type:'varchar', length:100, unique:true, nullable:false})
    nombre:string;

    @Column({type:'varchar', length:100})
    descripcion:string;

    @Column({nullable:false})
    stock:number;

    @Column()
    minimo:number;

    @Column()
    maximo:number;

    @Column({type:'date'})
    vencimiento:Date;

    @Column({type:'float', nullable:false})
    precio:number;

    @Column({type:'varchar', length:15})
    disponible:string;

    @Column({type:'float'})
    peso:number;

    @Column({type:'date'})
    fecha:Date;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @OneToMany(type => PedidoProducto, pedidoproducto => pedidoproducto.producto)
    pedidoproductos: PedidoProducto[];

    @OneToMany(type => UnidadProducto, unidadproducto => unidadproducto.producto)
    unidadproductos: UnidadProducto[];

    @OneToMany(type => ImgProducto, imgproducto => imgproducto.producto)
    imgproductos: ImgProducto[];

    @ManyToOne(type => Categoria, categoria => categoria.productos)
    @JoinColumn({name:'idcategoria'})
    categoria: Categoria;

    

}