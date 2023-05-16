import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    static find() {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn('uuid')
    id_usuario!: number

    @Column({ type: 'varchar' })
    username: string

    @Column({ type: 'varchar' })
    password: string

    @Column({ type: 'varchar' })
    email: string

}