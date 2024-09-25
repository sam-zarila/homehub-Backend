import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { houseDto } from 'src/DTOs/house.Dto';
import { House } from 'src/Entities/House.Entity';
import { HouseService } from 'src/house/services/house/house.service';

@ApiTags('Houses')
@Controller('house')
export class HouseController {

    constructor( private readonly houseService:HouseService){}

    @Post()
    @ApiOperation({ summary: 'Create a new property' })
    @ApiBody({ type: House})
    @ApiResponse({ status: 201, description: 'Property created successfully.', type:House})
    createHouse(@Body() houseEntity:House){
        return this. houseService.create(houseEntity)
  }
   @Get()
   @ApiOperation({summary:'get all houses'})
   @ApiResponse({status:201, description:'return all houses', type:houseDto})
   getHouses(): Promise<houseDto[]>{
    return this.houseService.findAll()

   }
   @Put(':id')
   @ApiOperation({summary:'update a house with and id'})
   @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
  @ApiBody({ type: House })
  @ApiResponse({ status: 200, description: 'Property updated successfully.', type: House })
  updateHouse(@Param(':id') id:number , @Body() updateDate:Partial<House>){

    return this.houseService.update(id, updateDate)
    
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a property by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
  @ApiResponse({ status: 200, description: 'Property deleted successfully.' })
    removeHouse(@Param('id') id:number){

        return this.houseService.remove(id)
        
    }


}



