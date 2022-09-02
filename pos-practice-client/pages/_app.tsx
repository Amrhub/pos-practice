import type { AppProps } from 'next/app';
import '../styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <Container>
        <Component {...pageProps} />
      </Container>
    </CssBaseline>
  );
}

export default MyApp;
