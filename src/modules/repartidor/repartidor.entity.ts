import { BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../user/user.entity";
import { Pedido } from "../pedido/pedido.entity";

@Entity('repartidor')
export class Repartidor extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idrepartidor: number;

    @Column({type: 'date', nullable:false})
    fecha: Date;

    @Column({type: 'time', nullable:false})
    hora:Date;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @OneToOne(type => User , user => user.repartidor)
    @JoinColumn({name:'idusuario'})
    user: User;

    @OneToMany(type => Pedido, pedido => pedido.repartidor)
    pedidos: Pedido[];

}