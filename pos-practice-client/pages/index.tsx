import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>POS Practice - Home</title>
      </Head>

      <Typography variant='h1' color='primary' gutterBottom>
        Welcome to POS Practice
      </Typography>
      <Typography variant='h5' gutterBottom>
        This is an interactive app where you get each time 10 random words and you categorize them
        according to their part of speech. In English language, words can be categorized according
        to their syntactic functions, which is known as &quot;Part of Speech&quot;. Examples of part
        of speech: (noun, verb, adjective, ...)
      </Typography>
      <Typography variant='h6' gutterBottom align='center' sx={{ mt: 4 }}>
        <Link href='/game'>
          <Button variant='contained' color='primary' sx={{ mr: 4 }}>
            Start Game
          </Button>
        </Link>
        <a
          href='https://en.wikipedia.org/wiki/Part_of_speech'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn more
        </a>
      </Typography>
    </>
  );
};

export default Home;
