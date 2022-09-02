import { Test, TestingModule } from '@nestjs/testing';
import { FileReaderService } from './file-reader.service';

describe('FileReaderService', () => {
  let service: FileReaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileReaderService],
    }).compile();

    service = module.get<FileReaderService>(FileReaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('.readTestData()', () => {
    it('should return scoresList when passed "scoresList"', () => {
      const scoresList = service.readTestData('scoresList');
      expect(typeof scoresList[0]).toBe('number');
    });

    it('should return wordList when passed "wordList"', () => {
      const wordList = service.readTestData('wordList');
      expect(wordList[0]).toHaveProperty('pos');
    });
  });
});
