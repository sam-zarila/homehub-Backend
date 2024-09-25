import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber,IsString, IsUrl } from "class-validator";


export class createProprtyDto{
    @ApiProperty({description:'image url'})
    @IsNotEmpty()
    @IsUrl()

    image:string;
    
    @ApiProperty({description:'price of the hous'})
    @IsNotEmpty()
    @IsString()

    price:string;
     
    @ApiProperty({description:'location'})
    @IsNotEmpty()
    @IsString()

    location:string;

    @ApiProperty({description:'brief description'})
    @IsNotEmpty()
    @IsString()

    description:string;



}