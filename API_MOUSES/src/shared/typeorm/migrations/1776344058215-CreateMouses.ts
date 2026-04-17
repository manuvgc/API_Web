import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMouses1776344058215 implements MigrationInterface {
    name = 'CreateMouses1776344058215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mouses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "brand" character varying NOT NULL, "MCU" character varying NOT NULL, "clicks" character varying NOT NULL, "sensor" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_166a98cd9f36e7e3b2c0a6172aa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mouses"`);
    }

}
