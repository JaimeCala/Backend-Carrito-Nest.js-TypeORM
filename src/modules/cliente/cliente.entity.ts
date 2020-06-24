import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../user/user.entity";
import { Pedido } from "../pedido/pedido.entity";

@Entity('cliente')
export class Cliente extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    idcliente:number;

    @Column({type:'varchar', length:100, })
    identificador: string;

    @Column({type:'varchar', length:100,})
    observacion: string;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @OneToOne(type => User, user => user.cliente)
    @JoinColumn({name:'idusuario'})
    user: User;

    @OneToMany(type => Pedido, pedido => pedido.cliente)
    pedidos: Pedido[];

}