import './global/App.scss';
// import Home from './components/Home';
// import Joheesu from './components/Projects/Joheesu';
// import HandTracking from './components/Projects/HandTracking';
// import HotelMetaverse from './components/Projects/HotelMetaverse';
// import Cyworld from './components/Projects/Cyworld';
// import MyPT from './components/Projects/MyPT';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Resume: 조민지</title>
        <meta name="description" content="개발자 조민지의 포트폴리오입니다."></meta>
        <meta name="keywords" content="프론트엔드 포트폴리오, 개발자 포트폴리오, 웹 개발자, 포트폴리오 사이트"></meta>
        <meta property="og:title" content="Resume: 조민지"></meta>
        <meta property="og:description" content="개발자 조민지의 포트폴리오입니다."></meta>
      </Head>
      <Component {...pageProps} />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/Photographer-Portfolio" element={<Joheesu />} />
          <Route path="/project/HandTracking" element={<HandTracking />} />
          <Route path="/project/Hotel-Metaverse" element={<HotelMetaverse />} />
          <Route path="/project/Cyworld" element={<Cyworld />} />
          <Route path="/project/MyPT" element={<MyPT />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
