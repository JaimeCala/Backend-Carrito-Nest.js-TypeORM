import {MigrationInterface, QueryRunner} from "typeorm";

export class proveedorCompra1607632513606 implements MigrationInterface {
    name = 'proveedorCompra1607632513606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "proveedor" ("idproveedor" SERIAL NOT NULL, "nombre" character varying(25) NOT NULL, "ci_nit" character varying(20) NOT NULL, "telefono" character varying(10) NOT NULL, "estado" character varying(10) NOT NULL DEFAULT 'ACTIVO', "email" character varying(50) NOT NULL, "direccion" character varying(100) NOT NULL, "fecha" date NOT NULL, "hora" TIME NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c8d091af76c3bf4f4bacd17569a" PRIMARY KEY ("idproveedor"))`);
        await queryRunner.query(`CREATE TABLE "compra" ("idcompra" SERIAL NOT NULL, "precio_compra" double precision NOT NULL, "tipo_compobandte" character varying(20) NOT NULL, "num_comprobante" character varying(20) NOT NULL, "cantidad_ingreso" integer NOT NULL, "observacion" character varying(150), "fecha" date NOT NULL, "hora" TIME NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "idproveedor" integer, "idproducto" integer, CONSTRAINT "PK_754f1ce4c972617d36462439969" PRIMARY KEY ("idcompra"))`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "cantidad"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "estado" character varying(10) NOT NULL DEFAULT 'ACTIVO'`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "estado" character varying(10) NOT NULL DEFAULT 'ACTIVO'`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" ADD "precio_uni" double precision`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" ADD "precio_total" double precision`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD "estado" character varying(10) NOT NULL DEFAULT 'CAMINO'`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "observacion" character varying(200)`);
        await queryRunner.query(`ALTER TABLE "rol" ADD "estado" character varying(10) NOT NULL DEFAULT 'ACTIVO'`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "estado" character varying(10) NOT NULL DEFAULT 'ESPERA'`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "estadopedido"`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "estadopedido" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "FK_86823f9bccdcf720e35ea9aa692" FOREIGN KEY ("idproveedor") REFERENCES "proveedor"("idproveedor") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "FK_d99cf064d7b89a937a20baf9afb" FOREIGN KEY ("idproducto") REFERENCES "producto"("idproducto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "FK_d99cf064d7b89a937a20baf9afb"`);
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "FK_86823f9bccdcf720e35ea9aa692"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "estadopedido"`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "estadopedido" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "estado" character varying(25)`);
        await queryRunner.query(`ALTER TABLE "rol" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "observacion"`);
        await queryRunner.query(`ALTER TABLE "repartidor" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" DROP COLUMN "precio_total"`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" DROP COLUMN "precio_uni"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "cantidad" integer`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "total" double precision NOT NULL`);
        await queryRunner.query(`DROP TABLE "compra"`);
        await queryRunner.query(`DROP TABLE "proveedor"`);
    }

}
