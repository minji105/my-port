import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Joheesu from './components/Projects/Joheesu';
import HandTracking from './components/Projects/HandTracking';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/Photographer-Portfolio" element={<Joheesu />} />
          <Route path="/project/HandTracking" element={<HandTracking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
