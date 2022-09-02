import { Injectable } from '@nestjs/common';
import { WordList } from './shared/services/file-reader/dto/testData.dto';
import { FileReaderService } from './shared/services/file-reader/file-reader.service';
import { randomWords } from './shared/utils/words';

@Injectable()
export class AppService {
  constructor(private readonly fileReaderService: FileReaderService) {}

  getWelcomeMessage(): string {
    return 'Welcome to POS practice api! v1.0.0';
  }

  getRandomWords(numberOfDesiredWords: number): WordList {
    const wordList = this.fileReaderService.readTestData('wordList') as WordList;
    if (numberOfDesiredWords > wordList.length) return wordList; // save on performance if numberOfDesiredWords is greater than wordList.length

    let filteredWordList: WordList;
    let wordListByPOS: Map<string, WordList>; // key: pos

    // make sure that it has at least 1 adjective, 1 adverb, 1 noun, and 1 verb
    do {
      // initial states
      wordListByPOS = new Map();
      filteredWordList = randomWords(wordList, numberOfDesiredWords);

      filteredWordList.forEach((word) => {
        if (!wordListByPOS.has(word.pos)) wordListByPOS.set(word.pos, [word]);
        else wordListByPOS.get(word.pos).push(word);
      });
    } while (wordListByPOS.size < 4);

    return filteredWordList;
  }

  getRank(score: number): number {
    const scoresList = this.fileReaderService.readTestData('scoresList') as number[];
    let numberOfBeatenScores = 0;

    scoresList.forEach((s) => {
      if (s < score) numberOfBeatenScores++;
    });
    const percentile = (numberOfBeatenScores / scoresList.length) * 100;

    // round to 2 decimal places
    const rank = Math.round(percentile * 100) / 100;

    return rank;
  }
}
