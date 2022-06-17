import { Test, TestingModule } from '@nestjs/testing';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let productService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    productService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
  });

  describe("create", () => {
    it('should create a new product', () => {
      const createProductDto: CreateProductDto = {
        name: 'Test Name',
        price: 0,
        description: 'Test Description'
      };

      expect(productService.create(createProductDto)).toBe('This action adds a new product');
    });
  });
});
