import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,  } from 'typeorm'
import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    orphanage: Orphanage;
}