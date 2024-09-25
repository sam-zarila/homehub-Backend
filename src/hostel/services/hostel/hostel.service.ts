import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hostel } from 'src/Entities/hostel.Entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class HostelService {
    constructor(
        @InjectRepository(Hostel) private readonly hostelRepository:Repository<Hostel>

    ){}
    create(hostel:Hostel){
        return this.hostelRepository.save(hostel)
    }
    findAll():Promise<Hostel[]>{
        return this.hostelRepository.find()
    }
    async update(id:number, updateData:Partial<Hostel>):Promise<Hostel>{
        await this.hostelRepository.update(id,updateData)
        return this.hostelRepository.findOneBy({id})

    }
    async remove(id:number): Promise<void>{
        await this.hostelRepository.delete(id)
    }
    async search(term:string):Promise<Hostel[]>{
        return this.hostelRepository.find({
            where:[
                { name: Like('%${term}%')},
                { location: Like('%${term}%')},
                { gender: Like('%${term}%')},
            ]
        })
    }
}
