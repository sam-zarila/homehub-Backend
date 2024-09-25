import { Module } from '@nestjs/common';
import { ChatController } from './controllers/chat.controller';
import { ChatService } from './service/chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from 'src/Entities/Chat.Entity';


@Module({

  imports:[TypeOrmModule.forFeature([Chat])],
  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule {}
