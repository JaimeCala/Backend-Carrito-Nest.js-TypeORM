import {MigrationInterface, QueryRunner} from "typeorm";

export class cuartaMigration1592264830779 implements MigrationInterface {
    name = 'cuartaMigration1592264830779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "direccion" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "direccion"`);
    }

}
