import {MigrationInterface, QueryRunner} from "typeorm";

export class modificandoCampos21597800381922 implements MigrationInterface {
    name = 'modificandoCampos21597800381922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "repartidor" DROP CONSTRAINT "FK_ee1d0680acbae18e558893ac3f3"`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD "idpedido" integer`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD CONSTRAINT "UQ_418867b89200edd309a0f8265c1" UNIQUE ("idpedido")`);
        await queryRunner.query(`ALTER TABLE "repartidor" DROP CONSTRAINT "UQ_ee1d0680acbae18e558893ac3f3"`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD CONSTRAINT "FK_418867b89200edd309a0f8265c1" FOREIGN KEY ("idpedido") REFERENCES "pedido"("idpedido") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "repartidor" DROP CONSTRAINT "FK_418867b89200edd309a0f8265c1"`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD CONSTRAINT "UQ_ee1d0680acbae18e558893ac3f3" UNIQUE ("idrepartidor")`);
        await queryRunner.query(`ALTER TABLE "repartidor" DROP CONSTRAINT "UQ_418867b89200edd309a0f8265c1"`);
        await queryRunner.query(`ALTER TABLE "repartidor" DROP COLUMN "idpedido"`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD CONSTRAINT "FK_ee1d0680acbae18e558893ac3f3" FOREIGN KEY ("idrepartidor") REFERENCES "pedido"("idpedido") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
