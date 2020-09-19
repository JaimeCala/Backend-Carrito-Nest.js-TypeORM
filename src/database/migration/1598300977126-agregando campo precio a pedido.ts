import {MigrationInterface, QueryRunner} from "typeorm";

export class agregandoCampoPrecioAPedido1598300977126 implements MigrationInterface {
    name = 'agregandoCampoPrecioAPedido1598300977126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" ADD "precio" double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "precio"`);
    }

}
