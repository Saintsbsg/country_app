import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home/Home';
import Country from './pages/Country/Country';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import './App.css'

function App() {

  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
      <Header/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country/:country' element={<Country/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
