import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('explore')

  export class Explore{
    @ApiProperty({ description:'identifier'})
    @PrimaryGeneratedColumn()
     id:number

     @ApiProperty({description:'image url'})
     @Column({type:"text"})
     
     image:string;

     @ApiProperty({description:'location'})
     @Column({type:'text'})
     location:string

     @ApiProperty({description:'price of the property'})
      @Column({type:'text'})
       price:string;

     @ApiProperty({description:'type of the property'})
     @Column({type:'text'})
     type:string

     @ApiProperty({description:'description'})
     @Column({type:'text'})
     description:string
      
  }