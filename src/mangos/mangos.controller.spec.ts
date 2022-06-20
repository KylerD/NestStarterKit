import { Test, TestingModule } from '@nestjs/testing';
import { CreateMangoDto } from './dto/create-mango.dto';
import { MangosController } from './mangos.controller';
import { MangosService } from './mangos.service';

describe('Mangos Controller', () => {
  let controller: MangosController;
  let service: MangosService;

  const createMangoDto: CreateMangoDto = {
    name: 'Mango #1',
    price: 0,
    description: 'Test Description',
  };

  const mockMango = {
    name: 'Mango #1',
    price: 0,
    description: 'Test Description',
    _id: 'id',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MangosController],
      providers: [
        {
          provide: MangosService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'Mango #1',
                price: 0,
                description: 'Test Description',
              },
              {
                name: 'Mango #2',
                price: 0,
                description: 'Test Description',
              },
              {
                name: 'Mango #3',
                price: 0,
                description: 'Test Description',
              },
            ]),
            create: jest.fn().mockResolvedValue(createMangoDto),
          },
        },
      ],
    }).compile();

    controller = module.get<MangosController>(MangosController);
    service = module.get<MangosService>(MangosService);
  });

  describe('create', () => {
    it('should create a new mango', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockMango);

      await controller.create(createMangoDto);
      expect(createSpy).toHaveBeenCalledWith(createMangoDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of mangos', async () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          name: 'Mango #1',
          price: 0,
          description: 'Test Description',
        },
        {
          name: 'Mango #2',
          price: 0,
          description: 'Test Description',
        },
        {
          name: 'Mango #3',
          price: 0,
          description: 'Test Description',
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
