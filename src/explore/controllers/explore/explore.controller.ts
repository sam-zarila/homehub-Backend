import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { exploreDto } from 'src/DTOs/createExplorePropert.dto';
import { Explore } from 'src/Entities/Explore.Entinty';
import { ExploreService } from 'src/explore/services/explore/explore.service';

@ApiTags('Explore Properties')
@Controller('explore')
export class ExploreController {
    constructor(private readonly exploreService: ExploreService) {}

    @Get()
    @ApiOperation({ summary: 'Get all property listings with optional filters' })
    @ApiQuery({ name: 'image', required: false, type: String })
    @ApiQuery({ name: 'location', required: false, type: String })
    @ApiQuery({ name: 'price', required: false, type: String })
    @ApiQuery({ name: 'type', required: false, type: String })
    @ApiQuery({ name: 'description', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Successfully retrieved property listings' })
    async getExplore(
        @Query() filter: {
            image?: string;
            location?: string;
            price?: string;
            type?: string;
            description?: string;
        }
    ): Promise<exploreDto[]> {
        return this.exploreService.findAll(filter);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new property listing' })
    @ApiBody({ type: Explore })
    @ApiResponse({ status: 201, description: 'Successfully created a new property listing' })
    createExplore(@Body() exploreListing: Explore) {
        return this.exploreService.create(exploreListing);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update an existing property listing' })
    @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
    @ApiBody({ type: Explore })
    @ApiResponse({ status: 200, description: 'Successfully updated the property listing' })
    updateExplore(
        @Param('id') id: number,
        @Body() updateData: Partial<Explore>
    ): Promise<Explore> {
        return this.exploreService.update(id, updateData);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a property listing' })
    @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
    @ApiResponse({ status: 200, description: 'Successfully deleted the property listing' })
    removeExplore(@Param('id') id: number): Promise<void> {
        return this.exploreService.remove(id);
    }
}
