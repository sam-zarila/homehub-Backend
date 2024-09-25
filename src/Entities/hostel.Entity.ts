import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('hostel')
export class Hostel{
    @ApiProperty({description:'unique identifier'})
    @PrimaryGeneratedColumn()

    id:number;
    @ApiProperty({description:'url of the image'})
    @Column({type:'text'})
    image:string;

    @ApiProperty({})
    @Column({type:'text'})
    price:string
    @ApiProperty({})
    @Column({type:'text'})
    name:string

    @ApiProperty({description:'location of the hostel'})
    @Column({type:'text'})
    location:string

    @ApiProperty({description:'boys or girls'})
    @Column({type:'text'})
    gender:string

    @ApiProperty({description:'date of the posting'})
    @Column({type:'text'})
    date:Date






}