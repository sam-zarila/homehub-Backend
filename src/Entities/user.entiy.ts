import { ApiAcceptedResponse, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')

export class User{
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({description:'username'})
    @Column({type:'varchar', length:100, nullable:false, unique:true})
    @IsString({message:'first name can not contain symbols'})
    @IsNotEmpty({message:'first name cannot be empty'})
    username:string;

    @ApiProperty({description:'email of the user'})
    @Column({ unique: true })
    email: string;

    
    @ApiProperty({description:'users password'})
    @Column({type:'varchar', length:100, nullable:false, unique:true})
    @IsString({message:'first name can not contain symbols'})
    @IsNotEmpty({message:'first name cannot be empty'})
    password:string;

   
    
}

