import { Module } from '@nestjs/common';
import { SearchController } from './controllers/search/search.controller';
import { SearchService } from './service/search/search.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { searchEntity } from 'src/Entities/Search.Entity';

@Module({
  imports:[TypeOrmModule.forFeature([searchEntity])],
  
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
