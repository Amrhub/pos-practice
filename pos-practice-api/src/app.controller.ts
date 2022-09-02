import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { WordList } from './shared/services/file-reader/dto/testData.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWelcomeMessage(): string {
    return this.appService.getWelcomeMessage();
  }

  @Get('/words')
  getWords(@Query('numberOfWords') numberOfWords = 10): WordList {
    return this.appService.getRandomWords(+numberOfWords);
  }

  @Get('/rank')
  getRank(@Query('score') score): number {
    return this.appService.getRank(+score);
  }
}
