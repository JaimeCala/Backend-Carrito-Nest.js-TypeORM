import {MigrationInterface, QueryRunner} from "typeorm";

export class agregandoCampoDireccion1598297555019 implements MigrationInterface {
    name = 'agregandoCampoDireccion1598297555019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" ADD "direccion" character varying(250)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "direccion"`);
    }

}
