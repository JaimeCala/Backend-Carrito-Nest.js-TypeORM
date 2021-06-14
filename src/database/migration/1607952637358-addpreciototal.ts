import {MigrationInterface, QueryRunner} from "typeorm";

export class addpreciototal1607952637358 implements MigrationInterface {
    name = 'addpreciototal1607952637358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "precio_compra"`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "precio_compra_uni" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "precio_compra_total" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "precio_compra_total"`);
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "precio_compra_uni"`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "precio_compra" double precision NOT NULL`);
    }

}
