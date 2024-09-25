import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Explore } from 'src/Entities/Explore.Entinty';
import { Repository, FindOptionsWhere } from 'typeorm';

@Injectable()
export class ExploreService {
    constructor(
        @InjectRepository(Explore) private exploreRepository: Repository<Explore>,
    ) {}

    async create(explore: Explore) {
        return this.exploreRepository.save(explore);
    }

    async findAll(filter?: {
        image?: string;
        location?: string;
        price?: string;
        type?: string;
        description?: string;
    }): Promise<Explore[]> {
        const where: FindOptionsWhere<Explore> = {};

        if (filter) {
            if (filter.image) where.image = filter.image;
            if (filter.location) where.location = filter.location;
            if (filter.price) where.price = filter.price;
            if (filter.type) where.type = filter.type;
            if (filter.description) where.description = filter.description;
        }

        return this.exploreRepository.find({ where });
    }

    async update(id: number, updateData: Partial<Explore>): Promise<Explore> {
        await this.exploreRepository.update(id, updateData);
        return this.exploreRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.exploreRepository.delete(id);
    }
}
