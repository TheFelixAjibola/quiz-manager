import { MigrationInterface, QueryRunner } from "typeorm";

export class EditMigrations1715416390398 implements MigrationInterface {
    name = 'EditMigrations1715416390398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`address\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`address\` varchar(255) NOT NULL`);
    }

}
