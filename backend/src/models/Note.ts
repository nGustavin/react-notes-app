import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('Notes')
export default class Notes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

}