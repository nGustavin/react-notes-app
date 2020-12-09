import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('note')
export default class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

}