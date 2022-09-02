import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileReaderService } from './shared/services/file-reader/file-reader.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, FileReaderService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return welcome the welcome message"', () => {
      expect(appController.getWelcomeMessage()).toBe('Welcome to POS practice api! v1.0.0');
    });
  });
});
