import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";




@Entity('chat')

export class Chat{

 @ApiProperty({description:'identifier'})   
@PrimaryGeneratedColumn()

 id:number

 @ApiProperty({description:'sender'})
 @Column()
 sender:string;

 @ApiProperty({description:'text'})
 @Column()

 text:string;

 @ApiProperty({description:'date created'})
 @Column()
 createdAt:Date;


 
}