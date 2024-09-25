import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class searchEntity{
    @ApiProperty({ description:'identifier'})
    @PrimaryGeneratedColumn()

    id:number;
    
    @ApiProperty({description:'type of the property'})
    @Column()
    type:string


    @ApiProperty({description:'property location'})
    @Column()
    city:string


    @ApiProperty({description:'price of the property'})
    @Column()
    price:string


}