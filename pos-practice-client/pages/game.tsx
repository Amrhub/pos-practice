import { Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getRandomWords } from '../client/Client';
import { WordList } from '../client/dto/Words.dto';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import QuestionCard from '../components/QuestionCard';

const placeholders = [
  {
    id: 1,
    word: 'slowly',
    pos: 'adverb',
  },
  {
    id: 11,
    word: 'emit',
    pos: 'verb',
  },
  {
    id: 12,
    word: 'independent',
    pos: 'adjective',
  },
  {
    id: 6,
    word: 'walk',
    pos: 'verb',
  },
]; // To be used if the API is not available

const Game = () => {
  const router = useRouter();
  const [words, setWords] = useState<WordList>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const nextWord = (selectedCorrectAnswer: boolean) => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex((prev) => prev + 1);
      if (selectedCorrectAnswer) setCorrectAnswers((prev) => prev + 1);
    } else {
      setIsGameOver(true);
      const score = Math.round((correctAnswers / words.length) * 10000) / 100; // round to 2 decimal places
      router.push(
        {
          pathname: '/rank',
          query: { score },
        },
        '/rank',
      );
    }
  };

  const fetchWords = async () => {
    const words = await getRandomWords();
    setWords(words);
  };

  useEffect(() => {
    try {
      fetchWords();
    } catch (error) {
      console.error(error);
      setWords(placeholders);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Game</title>
      </Head>
      {words.length > 0 ? (
        <div>
          <QuestionCard
            word={words[currentWordIndex].word}
            correctAnswer={words[currentWordIndex].pos}
            nextWord={nextWord}
            isGameOver={isGameOver}
          />
          <LinearProgressWithLabel
            value={isGameOver ? 100 : (currentWordIndex / words.length) * 100}
            sx={{ borderRadius: 4, height: 8 }}
          />
        </div>
      ) : (
        <Typography variant='h1' align='center'>
          Loading...
        </Typography>
      )}
    </>
  );
};

export default Game;
