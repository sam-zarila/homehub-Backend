import { Module } from '@nestjs/common';
import { ExploreController } from './controllers/explore/explore.controller';
import { ExploreService } from './services/explore/explore.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Explore } from 'src/Entities/Explore.Entinty';


@Module({

  imports:[
    TypeOrmModule.forFeature([Explore])
  ],
  controllers: [ExploreController],
  providers: [ExploreService]
})
export class ExploreModule {}
