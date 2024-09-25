import { Module } from '@nestjs/common';
import { ListingPropertyController } from './controllers/listing-property/listing-property.controller';
import { ListingPropertyService } from './services/listing-property/listing-property.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingProperty } from 'src/Entities/Listing.Entity';

@Module({
  imports: [TypeOrmModule.forFeature([ListingProperty])],
  controllers: [ListingPropertyController],
  providers: [ListingPropertyService]
})
export class ListingPropertyModule {}
