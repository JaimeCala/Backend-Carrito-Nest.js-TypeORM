import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, ManyToOne, JoinColumn} from 'typeorm';
import { Login } from '../login/login.entity';
import { Admin } from '../admin/admin.entity';
import { Vendedor } from '../vendedor/vendedor.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Repartidor } from '../repartidor/repartidor.entity';
import { Rol } from '../rol/rol.entity';
import { type } from 'os';

@Entity('users')
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
    
    @Column({type:'varchar', length:100, nullable:false})
    direccion: string;

    @Column({type:'varchar', length:10,nullable:false})
    sexo: string;

    @Column({type:'varchar',length:50,nullable:false})
    ciudad: string;

    @Column({type:'varchar', length:8, default:'ACTIVO' , nullable:false})
    estado:string;

    @CreateDateColumn({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @ManyToOne( type =>Rol, rol => rol.user)
    @JoinColumn({name:'idrol'}))
    rol:Rol;

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