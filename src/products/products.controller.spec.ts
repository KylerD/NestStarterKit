import { Test, TestingModule } from '@nestjs/testing';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productsController = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });

  describe("create", () => {
    it("should call productService to create the product", () => {
      const createProductDto: CreateProductDto = {
        name: 'Test Name',
        price: 0,
        description: 'Test Description'
      };

      const createResult = 'test';
      jest.spyOn(productsService, 'create').mockImplementation(() => createResult);

      productsController.create(createProductDto);

      expect(productsService.create).toBeCalledWith(createProductDto);
      expect(productsController.create(createProductDto)).toBe(createResult);
    });
  });

  describe("findAll", () => {
    it("should call productService to findAll products", () => {
      const findAllResult = ['test'];
      jest.spyOn(productsService, 'findAll').mockImplementation(() => findAllResult);

      productsController.findAll();

      expect(productsService.findAll).toBeCalled();
      expect(productsController.findAll()).toBe(findAllResult);
    });
  });

  describe("findOne", () => {
    it("should call productService to findOne product", () => {
      const findOneResult = 'test';
      const id = '1';

      jest.spyOn(productsService, 'findOne').mockImplementation(() => findOneResult);

      productsController.findOne(id);

      expect(productsService.findOne).toBeCalledWith(+id);
      expect(productsController.findOne(id)).toBe(findOneResult);
    });
  });

  describe("update", () => {
    it("should call productService to update the product", () => {
      const updateProductDto: UpdateProductDto = {
        name: 'Updated Name',
        price: 0,
        description: 'Updated Description'
      };
      const updateId = '1';

      const updateResult = 'test';
      jest.spyOn(productsService, 'update').mockImplementation(() => updateResult);

      productsController.update(updateId, updateProductDto);

      expect(productsService.update).toBeCalledWith(+updateId, updateProductDto);
      expect(productsController.update(updateId, updateProductDto)).toBe(updateResult);
    });
  });

  describe("remove", () => {
    it("should call productService to remove the product", () => {
      const removeId = '1';
      const removeResult = 'test';

      jest.spyOn(productsService, 'remove').mockImplementation(() => removeResult);

      productsController.remove(removeId);

      expect(productsService.remove).toBeCalledWith(+removeId);
      expect(productsController.remove(removeId)).toBe(removeResult);
    });
  });
});
