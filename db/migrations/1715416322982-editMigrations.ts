import { MigrationInterface, QueryRunner } from "typeorm";

export class EditMigrations1715416322982 implements MigrationInterface {
    name = 'EditMigrations1715416322982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`address\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`address\``);
    }

}
