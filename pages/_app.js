import './global/App.scss';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Resume: 조민지</title>
        <meta name="description" content="개발자 조민지의 포트폴리오입니다."></meta>
        <meta name="application-name" content="Resume: 조민지"></meta>
        <meta name="author" content="조민지"></meta>
        <meta name="keywords" content="조민지, 포트폴리오, 개발자, 프론트엔드, portfolio"></meta>
        <meta name="google-site-verification" content="YT2ed87ec-uxvMV765Y78BYLFEs1CKVUe7xi8VH6JVw" />
        <meta property="og:title" content="Resume: 조민지"></meta>
        <meta property="og:description" content="개발자 조민지의 포트폴리오입니다."></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
