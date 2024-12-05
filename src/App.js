import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Joheesu from './components/Projects/Joheesu';
import HandTracking from './components/Projects/HandTracking';
import HotelMetaverse from './components/Projects/HotelMetaverse';
import Cyworld from './components/Projects/Cyworld';
import MyPT from './components/Projects/MyPT';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>Resume: 조민지</title>
    </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/Photographer-Portfolio" element={<Joheesu />} />
          <Route path="/project/HandTracking" element={<HandTracking />} />
          <Route path="/project/Hotel-Metaverse" element={<HotelMetaverse />} />
          <Route path="/project/Cyworld" element={<Cyworld />} />
          <Route path="/project/MyPT" element={<MyPT />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
