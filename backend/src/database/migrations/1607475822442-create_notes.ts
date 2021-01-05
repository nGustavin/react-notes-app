import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNotes1607475822442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({ 
            name: "Notes",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",

                    
                },
                {
                    name: "title",
                    type: "varchar",
                    onUpdate: "CASCADE",
                },
                {
                    name: "body",
                    type: "varchar",
                    onUpdate: "CASCADE",
                }
            ]
         }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Notes")
    }
}
