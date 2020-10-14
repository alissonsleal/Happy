import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    openingHours: string;

    @Column()
    openOnWeekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    images: Image[];
    
}