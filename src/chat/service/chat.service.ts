import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from 'src/Entities/Chat.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(Chat)
        private chatRepository:Repository<Chat>
    ){}

    async createChat(sender:string, text:string): Promise<Chat>{

        const newChat=this.chatRepository.create({sender, text});

        return this.chatRepository.save(newChat);

    }
    async getChats():Promise<Chat[]>{
        return this.chatRepository.find({order:{createdAt:'ASC'}})
    }
}
