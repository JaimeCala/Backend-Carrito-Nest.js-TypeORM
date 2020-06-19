import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne} from 'typeorm';
import { UserOperacion } from '../user-operacion/user-operacion.entity';
import { Login } from '../login/login.entity';
import { Admin } from '../admin/admin.entity';
import { Vendedor } from '../vendedor/vendedor.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Repartidor } from '../repartidor/repartidor.entity';

@Entity('user')
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn('increment')
    idusuario: number;

    @Column({type:'varchar', length:10, nullable:false, unique:true})
    ci:string;

    @Column({type:'varchar', length:5, nullable:false})
    expedido: string;

    @Column({type: 'varchar', length:25, nullable: false})
    nombre: string;
    
    @Column({type: 'varchar', length:25, nullable: false})
    paterno: string;

    @Column({type: 'varchar', length:25 })
    materno: string;

    @Column({type: 'varchar', unique:true, nullable: false})
    email: string;

    @Column({type:'varchar', length:10, nullable:false})
    celular: string;
    
    @Column({type:'varchar', length:10, nullable:false})
    direccion: string;

    @Column({type:'varchar', length:10,nullable:false})
    sexo: string;

    @Column({type:'varchar',length:50,nullable:false})
    ciudad: string;

    @Column({type:'varchar', length:8, default:'ACTIVE' , nullable:false})
    estado:string;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @OneToMany(type => UserOperacion, useroperacion => useroperacion.user)
    useroperacions:UserOperacion[];

    @OneToMany(type => Login, login => login.user)
    logins: Login[];

    @OneToOne(type => Admin, admin => admin.user)
    admin: Admin;

    @OneToOne(type => Vendedor, vendedor => vendedor.user)
    vendedor: Vendedor;

    @OneToOne(type => Cliente, cliente => cliente.user)
    cliente: Cliente;

    @OneToOne(type => Repartidor, repartidor => repartidor.user)
    repartidor: Repartidor;

    

   

    
    



    
}