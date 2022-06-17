import { Test, TestingModule } from '@nestjs/testing';
import { MangosService } from './mangos.service';
import { getModelToken } from '@nestjs/mongoose';
import { Mango } from './schemas/mango.schema';
import { Model } from 'mongoose';

const mockMango = {
  name: 'Mango #1',
  price: 0,
  description: 'Test Description',
};

describe('MangosService', () => {
  let service: MangosService;
  let model: Model<Mango>;

  const mangosArray = [
    {
      name: 'Mango #1',
      price: 0,
      description: 'Test Description',
    },
    {
      name: 'Mango #2',
      price: 0,
      description: 'Test Description',
    }
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MangosService,
        {
          provide: getModelToken('Mango'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockMango),
            constructor: jest.fn().mockResolvedValue(mockMango),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MangosService>(MangosService);
    model = module.get<Model<Mango>>(getModelToken('Mango'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find', () => {
    it('should return all mangos', async () => {
      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(mangosArray),
      } as any);
      const mangos = await service.findAll();
      expect(mangos).toEqual(mangosArray);
    });
  })

  describe('create', () => {
    it('should insert a new mango', async () => {
      jest.spyOn(model, 'create').mockImplementationOnce(() =>
        Promise.resolve({
          name: 'Mango #1',
          price: 0,
          description: 'Test Description',
        }),
      );
      const newMango = await service.create({
        name: 'Mango #1',
        price: 0,
        description: 'Test Description',
      });
      expect(newMango).toEqual(mockMango);
    });
  })
});