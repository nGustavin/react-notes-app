import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('Note')
export default class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

}