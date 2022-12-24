import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFlashCardDesk1671839626618 implements MigrationInterface {
    name = 'CreateFlashCardDesk1671839626618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "flash_card_deck" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, "description" character varying(1000) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7c05a707c5ad310cf1abb4fa462" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "flash_card_deck"`);
    }

}
