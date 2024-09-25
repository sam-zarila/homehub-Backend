import { Module } from '@nestjs/common';
import { HostelController } from './controllers/hostel/hostel/hostel.controller';
import { HostelService } from './services/hostel/hostel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hostel } from 'src/Entities/hostel.Entity';

@Module({
  imports:[TypeOrmModule.forFeature([Hostel])],
  controllers: [HostelController],
  providers: [HostelService]
})
export class HostelModule {}
