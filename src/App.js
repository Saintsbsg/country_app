import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home/Home';
import CountryPage from './pages/Country/CountryPage';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import './App.css'

function App() {

  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
      <Header/>
      {/* <SearchBar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country/:country' element={<CountryPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
