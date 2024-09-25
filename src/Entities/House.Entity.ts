import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class House{
    @ApiProperty({ description:'identifier'})
    @PrimaryGeneratedColumn()
      id:number;

      @ApiProperty({description:'url of the image'})
      @Column({type:'text'})
       image:string;

       
      @ApiProperty({description:'price of the property'})
      @Column({type:'text'})
       price:string;

       
      @ApiProperty({description:'Location of the property'})
      @Column({type:'varchar', length:255})
       location:string;
       @ApiProperty({description:'Location of the property'})
       @Column({type:'varchar', length:255})
        type:string;

       
      @ApiProperty({description:'Description of the property'})
      @Column({type:'text'})
       description:string;

       @Column()
       date:Date

}