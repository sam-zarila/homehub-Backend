import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createProprtyDto } from 'src/DTOs/CreateProperty.dto';
import { ListingProperty } from 'src/Entities/Listing.Entity';
import { ListingPropertyService } from 'src/listing-property/services/listing-property/listing-property.service';

@ApiTags('Properties')
@Controller('listing-property')
export class ListingPropertyController {
  constructor(private readonly ListingPropertyService:ListingPropertyService){}

   
  @Post()
  @ApiOperation({ summary: 'Create a new property' })
  @ApiBody({ type: ListingProperty })
  @ApiResponse({ status: 201, description: 'Property created successfully.', type:ListingProperty })
   createProperty(@Body() ListingProperty:ListingProperty){

       return this.ListingPropertyService.create(ListingProperty);

   }
    
    @Get('') 
    @ApiOperation({summary:'Get all Properties'})
    @ApiResponse({status:201, description:'Returns all properties', type:createProprtyDto})
    getProperties() :Promise<createProprtyDto[]> {

          return this.ListingPropertyService.findAll();
    }

    @Put(':id')
  @ApiOperation({ summary: 'Update a property by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
  @ApiBody({ type: ListingProperty })
  @ApiResponse({ status: 200, description: 'Property updated successfully.', type: ListingProperty })
    updatePropeties(@Param(':id') id:number, @Body() updateData:Partial<ListingProperty>){
        return this.ListingPropertyService.update(id, updateData )

    }
    @Delete(':id')
  @ApiOperation({ summary: 'Delete a property by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
  @ApiResponse({ status: 200, description: 'Property deleted successfully.' })
    removeProperty(@Param('id') id:number){

        return this.ListingPropertyService.remove(id)
        
    }


}
