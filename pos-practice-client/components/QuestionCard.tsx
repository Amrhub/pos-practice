import { Button, CircularProgress, Grow, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';

interface Choice {
  choice: string;
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

interface Message {
  content: string;
  color: 'success.main' | 'error.main';
}

interface IProps {
  correctAnswer: string;
  word: string;
  nextWord(isCorrect: boolean): void;
  isGameOver: boolean;
}

const QuestionCard = ({ correctAnswer, word, nextWord, isGameOver }: IProps) => {
  const [opened, setOpened] = useState(true);
  const [message, setMessage] = useState<Message>({ content: '', color: 'success.main' });
  const [didSelectAnswer, setDidSelectAnswer] = useState(false);
  const [choices, setChoices] = useState(
    new Map<number, Choice>([
      [1, { choice: 'adverb', color: 'primary' }],
      [2, { choice: 'verb', color: 'primary' }],
      [3, { choice: 'adjective', color: 'primary' }],
      [4, { choice: 'noun', color: 'primary' }],
    ]),
  );

  const handleClick = (index: number) => {
    if (didSelectAnswer) return;
    setDidSelectAnswer(true);
    const choice = choices.get(index) as Choice;
    const isCorrect = choice.choice === correctAnswer;
    if (isCorrect) {
      choice.color = 'success';
      setMessage({ content: 'Correct Answer!', color: 'success.main' });
    } else {
      choice.color = 'error';
      setMessage({ content: 'Incorrect Answer!', color: 'error.main' });
    }

    setChoices(new Map(choices.set(index, choice)));
    // wait 2 seconds before closing the card for user to be able to see the feedback
    setTimeout(() => {
      setOpened(false);
      setChoices(new Map(choices.set(index, { ...choice, color: 'primary' })));
      setDidSelectAnswer(false);
      // wait 0.5 second before opening the next card
      setTimeout(() => {
        nextWord(isCorrect);
        setOpened(true);
        setMessage({ content: '', color: 'success.main' });
      }, 500);
    }, 750);
  };

  return (
    <Grow in={opened}>
      <Paper
        sx={{ py: 6, display: 'flex', flexDirection: 'column', gap: 4, bgcolor: 'grey.200' }}
        elevation={4}
      >
        {!isGameOver ? (
          <>
            <Typography variant='h4' component='p' align='center'>
              &quot;{word.charAt(0).toUpperCase() + word.slice(1)}&quot;
            </Typography>
            <Stack direction='row' spacing={4} sx={{ mx: 'auto' }}>
              {Array.from(choices).map(([key, { choice, color }]) => (
                <Button
                  key={key}
                  variant='contained'
                  color={color}
                  onClick={() => {
                    handleClick(key);
                  }}
                  size='large'
                >
                  {choice}
                </Button>
              ))}
            </Stack>
          </>
        ) : (
          <Typography variant='h4' component='p' align='center'>
            Calculating your rank...
            <CircularProgress size={24} sx={{ ml: 2 }} color='success' />
          </Typography>
        )}
        {message?.content && (
          <Typography variant='h6' align='center' color={message.color}>
            {message.content}
          </Typography>
        )}
      </Paper>
    </Grow>
  );
};

export default QuestionCard;
