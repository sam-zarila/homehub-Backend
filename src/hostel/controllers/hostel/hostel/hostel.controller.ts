import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { hostelDTO } from 'src/DTOs/hostel.DTO';
import { Hostel } from 'src/Entities/hostel.Entity';

import { HostelService } from 'src/hostel/services/hostel/hostel.service';

@ApiTags('Hostels')
@Controller('hostel')
export class HostelController {
    constructor( private readonly hostelService:HostelService){}
    
    @Post()
    @ApiOperation({summary: 'create new hostel'})
    @ApiBody({type:Hostel})
    @ApiResponse({status:201, description:'hostel created succesfully ', type:Hostel})
    createHostel(@Body() hostel:Hostel){
        return this.hostelService.create(hostel)

    }
    @Get()
    @ApiOperation({summary: 'get all hostels'})
    @ApiResponse({status:201, description:'house returned ', type:Hostel})
    getHostes():Promise<hostelDTO[]>{
        return this.hostelService.findAll()

    }
    
    @Put(':id')
    @ApiOperation({summary:'update a hostel with and id'})
    @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
    @ApiBody({type:Hostel})
    @ApiResponse({status:201, description:'hostel returned ', type:Hostel})
    updateHostel(@Param(':id') id:number, @Body() updateData:Partial<Hostel>){
        return this.hostelService.update(id,updateData)

    }
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a property by ID' })
    @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
    @ApiResponse({ status: 200, description: 'Property deleted successfully.' })
    removeHostel(@Param('id') id:number){
        return this.hostelService.remove(id)
        
    }
    @Get('search')
    @ApiOperation({ summary: 'Search hostels by term' })
    @ApiResponse({ status: 200, description: 'Search results returned', type: Hostel, isArray: true })
    searchHostel(@Query('term') term:string):Promise<Hostel[]>{
        return this.hostelService.search(term)

    }

}
