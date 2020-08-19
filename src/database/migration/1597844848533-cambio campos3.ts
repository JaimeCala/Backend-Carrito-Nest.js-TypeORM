import {MigrationInterface, QueryRunner} from "typeorm";

export class cambioCampos31597844848533 implements MigrationInterface {
    name = 'cambioCampos31597844848533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" RENAME COLUMN "descripcion" TO "comentario"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "identificador"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "observacion"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "comentario"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "comentario" character varying(250)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "comentario"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "comentario" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "observacion" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "identificador" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedido" RENAME COLUMN "comentario" TO "descripcion"`);
    }

}
