import '../styles/globals.css';
import Nav from '../components/Nav';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {router.pathname != '/' && <Nav />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
