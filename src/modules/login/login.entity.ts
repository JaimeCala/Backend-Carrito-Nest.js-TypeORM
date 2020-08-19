import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity('login')
export class Login extends BaseEntity{
    
    @PrimaryGeneratedColumn('increment')
    idlogin:number;

    @Column({type:'varchar', unique:true, nullable:false, })
    username:string;


    @Column({type:'varchar',  nullable:false, })
    password:string;


    @Column({type:'date',  nullable:false, })
    fecha:Date;
    
    @Column({type:'time',  nullable:false, })
    hora:Date;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @ManyToOne(() => User, user => user.logins)
    @JoinColumn({name:'idusuario'})
    user: User;

}