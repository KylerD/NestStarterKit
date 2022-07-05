import { Test, TestingModule } from '@nestjs/testing';
import { OrangesService } from './oranges.service';
import { OrangeDao } from './dao/orange.dao';
import { KnexModule } from '../database-connectors/knex/knex.module';

const mockOrange = {
  id: 1,
  orange_name: 'Orange #1',
  orange_price: 0,
  orange_description: 'Test Description',
};

describe('OrangesService', () => {
  let service: OrangesService;
  let dao: OrangeDao;

  const orangesArray = [
    {
      id: 1,
      orange_name: 'Orange #1',
      orange_price: 0,
      orange_description: 'Test Description',
    },
    {
      id: 2,
      orange_name: 'Orange #2',
      orange_price: 0,
      orange_description: 'Test Description',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [KnexModule],
      providers: [OrangesService, OrangeDao],
    }).compile();

    service = module.get<OrangesService>(OrangesService);
    dao = module.get<OrangeDao>(OrangeDao);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find', () => {
    it('should return all oranges', async () => {
      jest.spyOn(dao, 'find').mockResolvedValueOnce(orangesArray);
      const oranges = await service.findAll();
      expect(oranges).toEqual(orangesArray);
    });
  });

  describe('create', () => {
    it('should insert a new orange', async () => {
      jest.spyOn(dao, 'create').mockImplementationOnce(() =>
        Promise.resolve({
          id: 1,
          orange_name: 'Orange #1',
          orange_price: 0,
          orange_description: 'Test Description',
        }),
      );
      const newOrange = await service.create(mockOrange);
      expect(newOrange).toEqual(mockOrange);
    });
  });
});
