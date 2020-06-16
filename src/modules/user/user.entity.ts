import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('users')
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    idusuario: number;

    @Column({type: 'varchar', length:25, nullable: false})
    nombre: string;
    
    @Column({type: 'varchar', length:25, nullable: false})
    paterno: string;

    @Column({type: 'varchar', length:25 })
    materno: string;

    @Column({type: 'varchar',  nullable: false})
    email: string;

    @Column()
    celular: number;



    @Column({type: 'timestamp',  name:'created_at'})
    createdAt: Date;

    @Column({type: 'timestamp',  name:'updated_at'})
    updatedAt: Date;

    @Column()
    telefono: string;

    @Column()
    sexo: string;

    @Column()
    direccion: string;

    @Column()
    ciudad: string;

    

   

    
    



    
}