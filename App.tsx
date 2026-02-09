
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import TheocheirHome from './pages/TheocheirHome';
import TheocheirAbout from './pages/TheocheirAbout';
import TheocheirResearch from './pages/TheocheirResearch';
import SentinelHome from './pages/SentinelHome';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/theocheir" element={<TheocheirHome />} />
        <Route path="/theocheir/about" element={<TheocheirAbout />} />
        <Route path="/theocheir/research" element={<TheocheirResearch />} />
        <Route path="/sentinel" element={<SentinelHome />} />
        <Route path="*" element={<Navigate to="/theocheir" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
