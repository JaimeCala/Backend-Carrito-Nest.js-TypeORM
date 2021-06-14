import {MigrationInterface, QueryRunner} from "typeorm";

export class fechavencimientochange1608060668516 implements MigrationInterface {
    name = 'fechavencimientochange1608060668516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "vencimiento"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "vencimiento" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "vencimiento"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "vencimiento" character varying`);
    }

}
