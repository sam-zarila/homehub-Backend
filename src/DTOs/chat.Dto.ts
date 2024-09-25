import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class chatDto{
    @ApiProperty({description:'identifier'})   
     id:number
    
     @ApiProperty({description:'sender'})
     @IsNotEmpty()
     @IsString()
     sender:string;
    
     @ApiProperty({description:'text'})
     @IsNotEmpty()
     @IsString()
     text:string;
    
     @ApiProperty({description:'date created'})
     @IsNotEmpty()
     @IsString()

     createdAt:Date;
    
}