import { Link } from "react-router-dom"
import './BackButton.css'
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
const BackButton = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`back-button-container ${theme}`}>
        <div className={`back-button-itens ${theme}`}>
            <i className="fa-solid fa-arrow-left-long"></i>
            <Link className={`back-button ${theme}`} to='/'>Back</Link>
        </div>
    </div>
  )
}

export default BackButton