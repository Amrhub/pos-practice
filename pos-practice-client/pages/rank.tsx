import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getRank } from '../client/Client';
import Head from 'next/head';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Rank = () => {
  const router = useRouter();
  const { query } = router;
  const [rank, setRank] = useState<number>();
  const [stateMessage, setStateMessage] = useState<string>();

  useEffect(() => {
    async function fetchRank() {
      try {
        if (!query.score) {
          router.push('/game');
          return; // I know this is not necessary but I like to be explicit for TypeScript was saying query.score could be undefined
        }
        setStateMessage('Loading...');
        const rank = await getRank(+query.score);
        setRank(rank);
        setStateMessage('');
      } catch {
        setStateMessage('Failed to get rank, please try again later');
      }
    }
    fetchRank();
  }, [query.score, router]);

  const isError = () => (stateMessage?.includes('Failed') ? 'error' : 'initial');
  return (
    <>
      <Head>
        <title>Rank</title>
      </Head>

      {rank ? (
        <>
          <Stack spacing={4} justifyContent='center' alignItems='center'>
            <Image src='/trophy.svg' height={300} width={300} alt='Trophy' />
            <Typography variant='h4' align='center'>
              You scored higher than {rank}% of other students
            </Typography>
            <Link href='/game'>
              <Button sx={{ mr: 4 }} variant='contained' color='success'>
                Play Again
              </Button>
            </Link>
            <Link href='/'>
              <Button variant='contained' color='primary'>
                Home
              </Button>
            </Link>
          </Stack>
        </>
      ) : (
        <Typography variant='h2' color={isError()}>
          {stateMessage}
        </Typography>
      )}
    </>
  );
};

export default Rank;
