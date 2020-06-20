import {MigrationInterface, QueryRunner} from "typeorm";

export class mapeandodb1592665360057 implements MigrationInterface {
    name = 'mapeandodb1592665360057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Modulo" ("idmodulo" SERIAL NOT NULL, "nombremodulo" character varying(25) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_83b9e1e1e781a6ec0baaf2be979" PRIMARY KEY ("idmodulo"))`);
        await queryRunner.query(`CREATE TABLE "operacion" ("idoperacion" SERIAL NOT NULL, "nombreoperacion" character varying(25) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "modulosIdmodulo" integer, CONSTRAINT "PK_b0d92e11ff9835f5e98d2a8fbbb" PRIMARY KEY ("idoperacion"))`);
        await queryRunner.query(`CREATE TABLE "useroperacion" ("iduseroperacion" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "operacionsIdoperacion" integer, "userIdusuario" integer, CONSTRAINT "PK_9963a6839447d3e98ea5802327d" PRIMARY KEY ("iduseroperacion"))`);
        await queryRunner.query(`CREATE TABLE "login" ("idlogin" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "fecha" date NOT NULL, "hora" TIME NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "userIdusuario" integer, CONSTRAINT "UQ_c9db456a9dca0e6e45d16669e9a" UNIQUE ("username"), CONSTRAINT "PK_50ba318012b060e609beead047a" PRIMARY KEY ("idlogin"))`);
        await queryRunner.query(`CREATE TABLE "unidadproducto" ("idunidadproducto" SERIAL NOT NULL, "valor" character varying(20) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "productoIdproducto" integer, CONSTRAINT "PK_ee8891a0ffdfa74511d01919638" PRIMARY KEY ("idunidadproducto"))`);
        await queryRunner.query(`CREATE TABLE "imgproducto" ("idimgproducto" SERIAL NOT NULL, "nombreimgprodu" character varying(50) NOT NULL, "linkimgprodu" character varying NOT NULL, "descripcion" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "productoIdproducto" integer, CONSTRAINT "PK_057d7146a0707a9f9d6a78d923f" PRIMARY KEY ("idimgproducto"))`);
        await queryRunner.query(`CREATE TABLE "imgcategoria" ("idimgcategoria" SERIAL NOT NULL, "nombreimgcategoria" character varying(50) NOT NULL, "linkimgcategoria" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "categoriaIdcategoria" integer, CONSTRAINT "PK_96bf4e9a7d54fe02b2d22a6d282" PRIMARY KEY ("idimgcategoria"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("idcategoria" SERIAL NOT NULL, "nombre" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9d3cc004e86fc94714b2bca1d86" PRIMARY KEY ("idcategoria"))`);
        await queryRunner.query(`CREATE TABLE "producto" ("idproducto" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "descripcion" character varying(100) NOT NULL, "stock" integer NOT NULL, "minimo" integer NOT NULL, "maximo" integer NOT NULL, "vencimiento" date NOT NULL, "precio" double precision NOT NULL, "disponible" character varying(15) NOT NULL, "peso" double precision NOT NULL, "fecha" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "categoriaIdcategoria" integer, CONSTRAINT "UQ_d86d179360134b4b74bda750664" UNIQUE ("nombre"), CONSTRAINT "PK_9a87a8b8af75084e6b5a6a8d7da" PRIMARY KEY ("idproducto"))`);
        await queryRunner.query(`CREATE TABLE "pedidoproducto" ("idpedidoproducto" SERIAL NOT NULL, "cantidad" integer NOT NULL, "descripcion" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "pedidoIdpedido" integer, "productoIdproducto" integer, CONSTRAINT "PK_3c6e641f613f6ba51ced39c4409" PRIMARY KEY ("idpedidoproducto"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("idcliente" SERIAL NOT NULL, "identificador" character varying(100) NOT NULL, "observacion" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userIdusuario" integer, CONSTRAINT "REL_112b22b5dd069f8e3b21e9f3e9" UNIQUE ("userIdusuario"), CONSTRAINT "PK_9f6fbdd4ab4aa4431fa02539a46" PRIMARY KEY ("idcliente"))`);
        await queryRunner.query(`CREATE TABLE "repartidor" ("idrepartidor" SERIAL NOT NULL, "fecha" date NOT NULL, "hora" TIME NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userIdusuario" integer, CONSTRAINT "REL_bd2b887789203af4bbc788658f" UNIQUE ("userIdusuario"), CONSTRAINT "PK_ee1d0680acbae18e558893ac3f3" PRIMARY KEY ("idrepartidor"))`);
        await queryRunner.query(`CREATE TABLE "pedido" ("idpedido" SERIAL NOT NULL, "latitud" character varying(100) NOT NULL, "longitud" character varying(100) NOT NULL, "fecha" date NOT NULL, "hora" TIME NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clienteIdcliente" integer, "repartidorIdrepartidor" integer, CONSTRAINT "PK_70726b8cb4f3ce27a06bd47b93c" PRIMARY KEY ("idpedido"))`);
        await queryRunner.query(`CREATE TABLE "venta" ("idventa" SERIAL NOT NULL, "estadopedido" character varying NOT NULL, "total" double precision NOT NULL, "cantidad" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "vendedorIdvendedor" integer, "pedidoIdpedido" integer, CONSTRAINT "PK_34a4a8091275c8bb662095f3e46" PRIMARY KEY ("idventa"))`);
        await queryRunner.query(`CREATE TABLE "vendedor" ("idvendedor" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userIdusuario" integer, CONSTRAINT "REL_c8bf0c7780bd244d3fb7687f7e" UNIQUE ("userIdusuario"), CONSTRAINT "PK_53a1e999e2b539fd05539a9172d" PRIMARY KEY ("idvendedor"))`);
        await queryRunner.query(`CREATE TABLE "user" ("idusuario" SERIAL NOT NULL, "ci" character varying(10) NOT NULL, "expedido" character varying(5) NOT NULL, "nombre" character varying(25) NOT NULL, "paterno" character varying(25) NOT NULL, "materno" character varying(25) NOT NULL, "email" character varying NOT NULL, "celular" character varying(10) NOT NULL, "direccion" character varying(10) NOT NULL, "sexo" character varying(10) NOT NULL, "ciudad" character varying(50) NOT NULL, "estado" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_098e105d84a153cfa5d8306df98" UNIQUE ("ci"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_b2ab85efc3a7c62fa29d76c009a" PRIMARY KEY ("idusuario"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("idadmin" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userIdusuario" integer, CONSTRAINT "REL_7e2d3097b9681a0f1e5827983f" UNIQUE ("userIdusuario"), CONSTRAINT "PK_6aa1c71c1e17f29974bfbffe7cf" PRIMARY KEY ("idadmin"))`);
        await queryRunner.query(`ALTER TABLE "operacion" ADD CONSTRAINT "FK_076a263125d1b55dbe49dccb672" FOREIGN KEY ("modulosIdmodulo") REFERENCES "Modulo"("idmodulo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "useroperacion" ADD CONSTRAINT "FK_440782dd20c97292bcd4750b2cc" FOREIGN KEY ("operacionsIdoperacion") REFERENCES "operacion"("idoperacion") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "useroperacion" ADD CONSTRAINT "FK_963582e453589c8b40ce9fd07a2" FOREIGN KEY ("userIdusuario") REFERENCES "user"("idusuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "login" ADD CONSTRAINT "FK_fe26416e4bfa6ae26ab744857a3" FOREIGN KEY ("userIdusuario") REFERENCES "user"("idusuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "unidadproducto" ADD CONSTRAINT "FK_9cc31fd287491c86a2b987d122c" FOREIGN KEY ("productoIdproducto") REFERENCES "producto"("idproducto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "imgproducto" ADD CONSTRAINT "FK_7326f1242701a83701345611aa2" FOREIGN KEY ("productoIdproducto") REFERENCES "producto"("idproducto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "imgcategoria" ADD CONSTRAINT "FK_ebff784487b8c37b1e25e2b280a" FOREIGN KEY ("categoriaIdcategoria") REFERENCES "categoria"("idcategoria") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_549cb47d80500e63cd8029c75d6" FOREIGN KEY ("categoriaIdcategoria") REFERENCES "categoria"("idcategoria") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" ADD CONSTRAINT "FK_1438cc2588f97093fb7a53f52ff" FOREIGN KEY ("pedidoIdpedido") REFERENCES "pedido"("idpedido") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" ADD CONSTRAINT "FK_77362b28d43059b8c2be29d8c34" FOREIGN KEY ("productoIdproducto") REFERENCES "producto"("idproducto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "FK_112b22b5dd069f8e3b21e9f3e9f" FOREIGN KEY ("userIdusuario") REFERENCES "user"("idusuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD CONSTRAINT "FK_bd2b887789203af4bbc788658fd" FOREIGN KEY ("userIdusuario") REFERENCES "user"("idusuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD CONSTRAINT "FK_6c0295e2111a86b13f5a2f0c6b0" FOREIGN KEY ("clienteIdcliente") REFERENCES "cliente"("idcliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD CONSTRAINT "FK_fb87d81237cb737eb19df750e00" FOREIGN KEY ("repartidorIdrepartidor") REFERENCES "repartidor"("idrepartidor") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "venta" ADD CONSTRAINT "FK_04c211c832d271711c09e3d4198" FOREIGN KEY ("vendedorIdvendedor") REFERENCES "vendedor"("idvendedor") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "venta" ADD CONSTRAINT "FK_115ce5f184fa32c3a00c0a8f61a" FOREIGN KEY ("pedidoIdpedido") REFERENCES "pedido"("idpedido") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendedor" ADD CONSTRAINT "FK_c8bf0c7780bd244d3fb7687f7ed" FOREIGN KEY ("userIdusuario") REFERENCES "user"("idusuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_7e2d3097b9681a0f1e5827983f6" FOREIGN KEY ("userIdusuario") REFERENCES "user"("idusuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_7e2d3097b9681a0f1e5827983f6"`);
        await queryRunner.query(`ALTER TABLE "vendedor" DROP CONSTRAINT "FK_c8bf0c7780bd244d3fb7687f7ed"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP CONSTRAINT "FK_115ce5f184fa32c3a00c0a8f61a"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP CONSTRAINT "FK_04c211c832d271711c09e3d4198"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP CONSTRAINT "FK_fb87d81237cb737eb19df750e00"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP CONSTRAINT "FK_6c0295e2111a86b13f5a2f0c6b0"`);
        await queryRunner.query(`ALTER TABLE "repartidor" DROP CONSTRAINT "FK_bd2b887789203af4bbc788658fd"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "FK_112b22b5dd069f8e3b21e9f3e9f"`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" DROP CONSTRAINT "FK_77362b28d43059b8c2be29d8c34"`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" DROP CONSTRAINT "FK_1438cc2588f97093fb7a53f52ff"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_549cb47d80500e63cd8029c75d6"`);
        await queryRunner.query(`ALTER TABLE "imgcategoria" DROP CONSTRAINT "FK_ebff784487b8c37b1e25e2b280a"`);
        await queryRunner.query(`ALTER TABLE "imgproducto" DROP CONSTRAINT "FK_7326f1242701a83701345611aa2"`);
        await queryRunner.query(`ALTER TABLE "unidadproducto" DROP CONSTRAINT "FK_9cc31fd287491c86a2b987d122c"`);
        await queryRunner.query(`ALTER TABLE "login" DROP CONSTRAINT "FK_fe26416e4bfa6ae26ab744857a3"`);
        await queryRunner.query(`ALTER TABLE "useroperacion" DROP CONSTRAINT "FK_963582e453589c8b40ce9fd07a2"`);
        await queryRunner.query(`ALTER TABLE "useroperacion" DROP CONSTRAINT "FK_440782dd20c97292bcd4750b2cc"`);
        await queryRunner.query(`ALTER TABLE "operacion" DROP CONSTRAINT "FK_076a263125d1b55dbe49dccb672"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "vendedor"`);
        await queryRunner.query(`DROP TABLE "venta"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TABLE "repartidor"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "pedidoproducto"`);
        await queryRunner.query(`DROP TABLE "producto"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "imgcategoria"`);
        await queryRunner.query(`DROP TABLE "imgproducto"`);
        await queryRunner.query(`DROP TABLE "unidadproducto"`);
        await queryRunner.query(`DROP TABLE "login"`);
        await queryRunner.query(`DROP TABLE "useroperacion"`);
        await queryRunner.query(`DROP TABLE "operacion"`);
        await queryRunner.query(`DROP TABLE "Modulo"`);
    }

}
