import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListingProperty } from 'src/Entities/Listing.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListingPropertyService {

    constructor(
        @InjectRepository(ListingProperty) private ListingPropertyRepository:Repository<ListingProperty>,
    ){}
    // create new property
    create(ListingProperty:ListingProperty) {
        return this.ListingPropertyRepository.save(ListingProperty)

    }
    findAll():Promise<ListingProperty[]>{
        return this.ListingPropertyRepository.find()

    }
   async update(id:number, updateData: Partial<ListingProperty>): Promise<ListingProperty>{
       await this.ListingPropertyRepository.update(id,updateData)
       return this.ListingPropertyRepository.findOneBy({id});
      

   }
  async  remove(id: number): Promise<void>{
      await this.ListingPropertyRepository.delete(id);
   }
    

}
