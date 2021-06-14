import {MigrationInterface, QueryRunner} from "typeorm";

export class campoComprobante1607961519605 implements MigrationInterface {
    name = 'campoComprobante1607961519605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" RENAME COLUMN "tipo_compobandte" TO "tipo_comprobante"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" RENAME COLUMN "tipo_comprobante" TO "tipo_compobandte"`);
    }

}
