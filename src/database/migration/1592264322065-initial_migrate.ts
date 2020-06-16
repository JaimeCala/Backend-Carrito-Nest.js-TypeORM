import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigrate1592264322065 implements MigrationInterface {
    name = 'initialMigrate1592264322065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("idusuario" SERIAL NOT NULL, "nombre" character varying(25) NOT NULL, "paterno" character varying(25) NOT NULL, "materno" character varying(25) NOT NULL, "email" character varying NOT NULL, "celular" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_3814f9195aa2c392b21567d1dd0" PRIMARY KEY ("idusuario"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
