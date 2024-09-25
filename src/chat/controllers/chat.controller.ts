import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from '../service/chat.service';
import { Chat } from 'src/Entities/Chat.Entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Chats')
@Controller('chat')
export class ChatController {

    constructor(private readonly chatService:ChatService){}

    @Post()
    @ApiOperation({summary:'create new message'})
    @ApiBody({type:Chat})
    async createChat(
        @Body('sender') sender:string,
        @Body('text') text:string,
    ): Promise<Chat>{

        return this.chatService.createChat(sender,text);
        
    }
    @Get()
    @ApiOperation({summary:'get chats'})
     async getCha(): Promise<Chat[]>{
        return this.chatService.getChats()
     }
     


}
