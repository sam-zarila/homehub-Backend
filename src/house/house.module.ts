import { Module } from '@nestjs/common';
import { HouseController } from './controllers/house/house.controller';
import { HouseService } from './services/house/house.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from 'src/Entities/House.Entity';

@Module({
  imports:[TypeOrmModule.forFeature([House])],
  controllers: [HouseController],
  providers: [HouseService]
})
export class HouseModule {}
