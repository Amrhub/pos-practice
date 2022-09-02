import { WordList } from '../services/file-reader/dto/testData.dto';

export function randomWords(wordList: WordList, numberOfDesiredWords): WordList {
  if (numberOfDesiredWords > wordList.length) return wordList;
  const filteredWordList: WordList = [];
  const setOfRandomIndexes = new Set<number>();

  while (filteredWordList.length < numberOfDesiredWords) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    if (!setOfRandomIndexes.has(randomIndex)) {
      setOfRandomIndexes.add(randomIndex);
      filteredWordList.push(wordList[randomIndex]);
    }
  }

  return filteredWordList;
}
