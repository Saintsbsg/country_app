import './Home.css'
import CountryComponent from '../../components/Country/CountryComponent'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
const Home = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`home-container ${theme}`}>
      <CountryComponent/>  
    </div>
  )
}

export default Home