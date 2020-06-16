import {MigrationInterface, QueryRunner} from "typeorm";

export class secundMigration1592264455293 implements MigrationInterface {
    name = 'secundMigration1592264455293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "telefono" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "telefono"`);
    }

}
