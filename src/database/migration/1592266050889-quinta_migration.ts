import {MigrationInterface, QueryRunner} from "typeorm";

export class quintaMigration1592266050889 implements MigrationInterface {
    name = 'quintaMigration1592266050889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "ciudad" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "ciudad"`);
    }

}
