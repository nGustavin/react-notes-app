import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Nota {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    titulo: String;

    @Column()
    texto: String;

}