import { WordList } from './dto/Words.dto';

const ApiURL = 'http://localhost:3000';

const getRandomWords = async (numberOfWords = 10): Promise<WordList> => {
  try {
    const res = await fetch(`${ApiURL}/words?numberOfWords=${numberOfWords}`);
    return await res.json();
  } catch {
    throw new Error('Failed to get random words');
  }
};

const getRank = async (score: number): Promise<number> => {
  try {
    const res = await fetch(`${ApiURL}/rank?score=${score}`);
    return await res.json();
  } catch {
    throw new Error('Failed to get rank');
  }
};

export { getRandomWords, getRank };
