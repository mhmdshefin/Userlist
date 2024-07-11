import logo from './logo.svg';
import './App.css';
import FormPage from './components/FormPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import DataPage from './components/DataPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FormPage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/data" element={<DataPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
