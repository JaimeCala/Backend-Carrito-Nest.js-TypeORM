import {MigrationInterface, QueryRunner} from "typeorm";

export class tercerMigration1592264624815 implements MigrationInterface {
    name = 'tercerMigration1592264624815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "sexo" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "sexo"`);
    }

}
