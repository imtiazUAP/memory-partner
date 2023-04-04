import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMemories1680608251780 implements MigrationInterface {
    name = 'CreateMemories1680608251780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`memories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`created_at\` varchar(255) NOT NULL, \`updated_at\` varchar(255) NOT NULL, \`updated_by\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`name\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
        await queryRunner.query(`DROP TABLE \`memories\``);
    }

}
