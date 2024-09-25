import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from 'src/Entities/House.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class HouseService {

    constructor(
        @InjectRepository(House) private houseRepository:Repository<House>,

    ){}
    create(House:House){
        return this.houseRepository.save(House)

    }
    findAll():Promise<House[]>{
        return this.houseRepository.find()
    }
    async update(id:number, updateData:Partial<House>):Promise<House>{
        await this.houseRepository.update(id,updateData)
        return this.houseRepository.findOneBy({id})
    }
    async remove(id:number):Promise<void>{
        await this.houseRepository.delete(id)

    }
}
