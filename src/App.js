import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';
import ImageList from './components/ImageList';
import HeroHeaderContent from './components/HeroHeaderContent';

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/images" element={<ImageList />} />
          <Route path="/search" element={<HeroHeaderContent />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
