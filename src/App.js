import logo from './logo.svg';
import './App.css';
import CountryComponent from './components/Country/Country';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <CountryComponent/>
     <i class="fa-brands fa-js"></i>
     <i class="fa-regular fa-moon"></i>
    </div>
  );
}

export default App;
