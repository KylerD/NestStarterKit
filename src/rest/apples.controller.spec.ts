import { Test, TestingModule } from '@nestjs/testing';
import { CreateAppleDto } from './dto/create-apple.dto';
import { UpdateAppleDto } from './dto/update-apple.dto';
import { ApplesController } from './apples.controller';
import { ApplesService } from './apples.service';

describe('ApplesController', () => {
  let applesController: ApplesController;
  let applesService: ApplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplesController],
      providers: [ApplesService],
    }).compile();

    applesController = module.get<ApplesController>(ApplesController);
    applesService = module.get<ApplesService>(ApplesService);
  });

  it('should be defined', () => {
    expect(applesController).toBeDefined();
  });

  describe("create", () => {
    it("should call applesService to create the apple", () => {
      const createAppleDto: CreateAppleDto = {
        name: 'Test Name',
        price: 0,
        description: 'Test Description'
      };

      const createResult = 'test';
      jest.spyOn(applesService, 'create').mockImplementation(() => createResult);

      applesController.create(createAppleDto);

      expect(applesService.create).toBeCalledWith(createAppleDto);
      expect(applesController.create(createAppleDto)).toBe(createResult);
    });
  });

  describe("findAll", () => {
    it("should call applesService to findAll apples", () => {
      const findAllResult = ['test'];
      jest.spyOn(applesService, 'findAll').mockImplementation(() => findAllResult);

      applesController.findAll();

      expect(applesService.findAll).toBeCalled();
      expect(applesController.findAll()).toBe(findAllResult);
    });
  });

  describe("findOne", () => {
    it("should call applesService to findOne apple", () => {
      const findOneResult = 'test';
      const id = '1';

      jest.spyOn(applesService, 'findOne').mockImplementation(() => findOneResult);

      applesController.findOne(id);

      expect(applesService.findOne).toBeCalledWith(+id);
      expect(applesController.findOne(id)).toBe(findOneResult);
    });
  });

  describe("update", () => {
    it("should call applesService to update the apple", () => {
      const updateAppleDto: UpdateAppleDto = {
        name: 'Updated Name',
        price: 0,
        description: 'Updated Description'
      };
      const updateId = '1';

      const updateResult = 'test';
      jest.spyOn(applesService, 'update').mockImplementation(() => updateResult);

      applesController.update(updateId, updateAppleDto);

      expect(applesService.update).toBeCalledWith(+updateId, updateAppleDto);
      expect(applesController.update(updateId, updateAppleDto)).toBe(updateResult);
    });
  });

  describe("remove", () => {
    it("should call applesService to remove the apple", () => {
      const removeId = '1';
      const removeResult = 'test';

      jest.spyOn(applesService, 'remove').mockImplementation(() => removeResult);

      applesController.remove(removeId);

      expect(applesService.remove).toBeCalledWith(+removeId);
      expect(applesController.remove(removeId)).toBe(removeResult);
    });
  });
});
