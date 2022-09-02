export type TestDataKeys = 'wordList' | 'scoresList';

export interface Word {
  id: number;
  pos: string;
  word: string;
}

export type WordList = Word[];

export interface TestData {
  scoresList: number[];
  wordList: WordList;
}

type ValueOf<T> = T[keyof T];

export type ValuesOfTestData = ValueOf<TestData>;
