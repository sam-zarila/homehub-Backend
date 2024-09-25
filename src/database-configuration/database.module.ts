import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './database.config';
import { ConfigurationModule } from './config.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ListingProperty } from 'src/Entities/Listing.Entity';
import { Explore } from 'src/Entities/Explore.Entinty';
import { Chat } from 'src/Entities/Chat.Entity';
import { User } from 'src/Entities/user.entiy';
import { Agent } from 'http';
import { News } from 'src/Entities/News.entity';
import { House } from 'src/Entities/House.Entity';
import { searchEntity } from 'src/Entities/Search.Entity';
import { Hostel } from 'src/Entities/hostel.Entity';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigurationModule],
            inject: [DatabaseConfigService],
            useFactory: (configService: DatabaseConfigService) => ({
                type: 'mysql',
                host: configService.getHost(),
                port: configService.getPort(),
                username: configService.getUserName(),
                password: configService.getPassword(),
                database: configService.getDatabaseName(),
                entities: [ListingProperty, Explore, Chat, User, Agent,News,House,searchEntity,Hostel],
                synchronize: true,
            }),
        }),
    ],
    providers: [DatabaseConfigService, ConfigService],
})
export class DatabaseModule{}