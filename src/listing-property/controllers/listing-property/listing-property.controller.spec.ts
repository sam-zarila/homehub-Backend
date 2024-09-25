import { Test, TestingModule } from '@nestjs/testing';
import { ListingPropertyController } from './listing-property.controller';

describe('ListingPropertyController', () => {
  let controller: ListingPropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingPropertyController],
    }).compile();

    controller = module.get<ListingPropertyController>(ListingPropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
