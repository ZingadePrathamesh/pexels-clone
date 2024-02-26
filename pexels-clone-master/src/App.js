import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';
import ImageList from './components/ImageList';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
