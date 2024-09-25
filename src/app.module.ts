import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingProperty } from './Entities/Listing.Entity';
import { ListingPropertyModule } from './listing-property/listing-property.module';
import { ExploreModule } from './explore/explore.module';
import { Explore } from './Entities/Explore.Entinty';
import { ChatModule } from './chat/chat.module';
import { Chat } from './Entities/Chat.Entity';
import { AuthModule } from './auth/auth.module';
import { User } from './Entities/user.entiy';
import { AgentModule } from './agent/agent.module';
import { Agent } from './Entities/Agent.Entity';
import { ServeStaticModule } from '@nestjs/serve-static';  
import { join } from 'path'; 
import { NotificationService } from './notification/notification.service';
import { NotificationModule } from './notification/notification.module';
import { NewsModule } from './news/news.module';
import { News } from './Entities/News.entity';
import { HouseModule } from './house/house.module';
import { House } from './Entities/House.Entity';
import { SearchModule } from './search/search.module';
import { searchEntity } from './Entities/Search.Entity';
import { HostelModule } from './hostel/hostel.module';
import { Hostel } from './Entities/hostel.Entity';

@Module({
  imports: [
    // Serve static assets from the "uploads" folder
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    
    // Database connection
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b4free.net',
      port: 3306,
      username: 'heslgb1',
      password: 'qwertyuiop',
      database: 'heslgb_db1',
      entities: [ListingProperty, Explore, Chat, User, Agent,News,House,searchEntity,Hostel],
      synchronize: true,
    }),

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
