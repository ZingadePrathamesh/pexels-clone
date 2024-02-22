
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Introduction/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
