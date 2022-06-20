import { Test, TestingModule } from '@nestjs/testing';
import { CreateAppleDto } from './dto/create-apple.dto';
import { ApplesService } from './apples.service';

describe('ApplesService', () => {
  let applesService: ApplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplesService],
    }).compile();

    applesService = module.get<ApplesService>(ApplesService);
  });

  it('should be defined', () => {
    expect(applesService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new apple', () => {
      const createAppleDto: CreateAppleDto = {
        name: 'Test Name',
        price: 0,
        description: 'Test Description',
      };

      expect(applesService.create(createAppleDto)).toBe(
        'This action adds a new apple',
      );
    });
  });
});
