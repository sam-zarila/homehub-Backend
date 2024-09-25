import { Test, TestingModule } from '@nestjs/testing';
import { ListingPropertyService } from './listing-property.service';

describe('ListingPropertyService', () => {
  let service: ListingPropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingPropertyService],
    }).compile();

    service = module.get<ListingPropertyService>(ListingPropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
