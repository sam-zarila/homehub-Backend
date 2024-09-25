import { ApiProperty } from "@nestjs/swagger";


export class exploreDto{

    @ApiProperty({ description:'identifier'})
  
     id:number

     @ApiProperty({description:'image url'})
   
     
     image:string;

     @ApiProperty({description:'location'})
   
     location:string

     @ApiProperty({description:'price of the property'})
      
       price:string;

     @ApiProperty({description:'type of the property'})
    
     type:string

     @ApiProperty({description:'description'})
   
     description:string

}