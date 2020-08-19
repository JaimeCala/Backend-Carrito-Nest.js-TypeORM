import {MigrationInterface, QueryRunner} from "typeorm";

export class cambiandoCampos1597799637552 implements MigrationInterface {
    name = 'cambiandoCampos1597799637552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" DROP CONSTRAINT "FK_9182a2f8f8a109700941fa88fa1"`);
        await queryRunner.query(`ALTER TABLE "pedido" RENAME COLUMN "idrepartidor" TO "descripcion"`);
        await queryRunner.query(`ALTER TABLE "imgproducto" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD CONSTRAINT "UQ_ee1d0680acbae18e558893ac3f3" UNIQUE ("idrepartidor")`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "descripcion" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "repartidor" ADD CONSTRAINT "FK_ee1d0680acbae18e558893ac3f3" FOREIGN KEY ("idrepartidor") REFERENCES "pedido"("idpedido") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "repartidor" DROP CONSTRAINT "FK_ee1d0680acbae18e558893ac3f3"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "descripcion" integer`);
        await queryRunner.query(`ALTER TABLE "repartidor" DROP CONSTRAINT "UQ_ee1d0680acbae18e558893ac3f3"`);
        await queryRunner.query(`ALTER TABLE "pedidoproducto" ADD "descripcion" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "imgproducto" ADD "descripcion" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedido" RENAME COLUMN "descripcion" TO "idrepartidor"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD CONSTRAINT "FK_9182a2f8f8a109700941fa88fa1" FOREIGN KEY ("idrepartidor") REFERENCES "repartidor"("idrepartidor") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
