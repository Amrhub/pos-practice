import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { FileReaderService } from './shared/services/file-reader/file-reader.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, FileReaderService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('.getRandomWords()', () => {
    it('.getRandomWords(10) should return an array of 10 words', () => {
      const words = service.getRandomWords(10);
      expect(words.length).toBe(10);
    });

    it('should return an array that consists of 1 adjective, 1 adverb, 1 noun, and 1 verb', () => {
      const words = service.getRandomWords(4);
      expect(words.filter((word) => word.pos === 'adjective').length).toBe(1);
      expect(words.filter((word) => word.pos === 'adverb').length).toBe(1);
      expect(words.filter((word) => word.pos === 'noun').length).toBe(1);
      expect(words.filter((word) => word.pos === 'verb').length).toBe(1);
    });

    describe('.getRank()', () => {
      // ! This test is written given that TestData.json is static and has a fixed set of scores.
      it('.getRank(90) should return correct rank (80)', () => {
        const rank = service.getRank(90);
        expect(rank).toBe(80);
      });

      it('.getRank(60) should return correct rank rounded to nearest hundredth (56.67)', () => {
        const rank = service.getRank(60);
        expect(rank).toBe(56.67);
      });
    });
  });
});
