import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFlashCard1671915448638 implements MigrationInterface {
    name = 'CreateFlashCard1671915448638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "flash_card" ("id" SERIAL NOT NULL, "front" character varying(2000) NOT NULL, "back" character varying(2000) NOT NULL, "hiddenUntil" TIMESTAMP WITH TIME ZONE NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deckId" integer, CONSTRAINT "PK_4ed5054d4eddd35b19fa1972c0d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "flash_card" ADD CONSTRAINT "FK_9f7d924d66910f3f7099741e7bd" FOREIGN KEY ("deckId") REFERENCES "flash_card_deck"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flash_card" DROP CONSTRAINT "FK_9f7d924d66910f3f7099741e7bd"`);
        await queryRunner.query(`DROP TABLE "flash_card"`);
    }

}
