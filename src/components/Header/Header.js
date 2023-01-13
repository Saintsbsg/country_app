import './Header.css'
import { useContext } from 'react'
import {ThemeContext} from '../../context/ThemeContext'
const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const toogleTheme = () =>{
    setTheme((curr) => (curr == 'light'? 'dark': 'light'));
  }
  return (
    <header className={`header ${theme}`}>
        <h1>Where in the world?</h1>
        <div>
        <div className='dark-mode-container' onClick={toogleTheme}>
        <i className="fa-regular fa-moon"></i>
        <span>Dark Mode</span>
        </div>
        </div>
    </header>
  )
}

export default Header