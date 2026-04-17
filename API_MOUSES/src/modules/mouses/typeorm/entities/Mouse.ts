import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("mouses")
export default class Mouse{

    @PrimaryGeneratedColumn('uuid') //name, brand, MCU, clicks, sensor
    id: string;

    @Column()
    name: string; //ex: Viper v4 Pro

    @Column()
    brand: string; // ex: razer

    @Column()
    MCU: string; // ex: nordic 54

    @Column()
    clicks: string; // ex: razer optical gen 3

    @Column('int')
    sensor: number; // ex: 3955

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date;

}