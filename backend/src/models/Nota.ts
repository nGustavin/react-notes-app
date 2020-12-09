import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Note {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    title: String;

    @Column()
    body: String;

}