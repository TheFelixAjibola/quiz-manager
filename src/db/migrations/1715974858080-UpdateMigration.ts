import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateMigration1715974858080 implements MigrationInterface {
    name = 'UpdateMigration1715974858080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('admin', 'supervisor', 'hr', 'member') NOT NULL DEFAULT 'member'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    }

}
