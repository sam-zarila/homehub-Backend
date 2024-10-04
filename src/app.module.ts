import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingProperty } from './Entities/Listing.Entity';
import { Explore } from './Entities/Explore.Entinty';
import { Chat } from './Entities/Chat.Entity';
import { User } from './Entities/user.entiy';
import { Agent } from './Entities/Agent.Entity';
import { News } from './Entities/News.entity';
import { House } from './Entities/House.Entity';
import { searchEntity } from './Entities/Search.Entity';
import { Hostel } from './Entities/hostel.Entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

// Import your modules
import { ListingPropertyModule } from './listing-property/listing-property.module';
import { ExploreModule } from './explore/explore.module';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { AgentModule } from './agent/agent.module';
import { NotificationModule } from './notification/notification.module';
import { NewsModule } from './news/news.module';
import { HouseModule } from './house/house.module';
import { SearchModule } from './search/search.module';
import { HostelModule } from './hostel/hostel.module';
import { DatabaseModule } from './database-configuration/database.module';
import { ConfigurationModule } from './database-configuration/config.module';
import { NotificationService } from './notification/notification.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Ensure this is correct
      password: '', // Update this if needed
      database: 'RealEstate_Database',
      entities: [ListingProperty, Explore, Chat, User, Agent, News, House, searchEntity, Hostel],
      synchronize: false,
      logging: true, // Enable logging to see detailed errors
    }),
    ConfigurationModule,
    DatabaseModule,
    ListingPropertyModule,
    ExploreModule,
    ChatModule,
    AuthModule,
    AgentModule,
    NotificationModule,
    NewsModule,
    HouseModule,
    SearchModule,
    HostelModule,
  ],
  controllers: [AppController],
  providers: [AppService, NotificationService],
})
export class AppModule {}
