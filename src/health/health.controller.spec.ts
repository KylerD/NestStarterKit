import { HttpModule } from '@nestjs/axios';
import { HealthCheckService, HttpHealthIndicator, TerminusModule } from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;
  const mockHealthService = { check: jest.fn((checks) => { checks[0]() }) };
  const mockHttpHealthIndicator = { pingCheck: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule, HttpModule],
      controllers: [HealthController]
    })
      .overrideProvider(HealthCheckService)
      .useValue(mockHealthService)
      .overrideProvider(HttpHealthIndicator)
      .useValue(mockHttpHealthIndicator)
      .compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/health', () => {
    it('should call the HealthCheckService to make an http check for nest docs', async () => {
      await controller.check();
      expect(mockHealthService.check).toHaveBeenCalled();
      expect(mockHttpHealthIndicator.pingCheck).toHaveBeenCalledWith('nestjs-docs', 'https://docs.nestjs.com');
    });
  });
});
