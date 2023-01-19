import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../config/api";
import './CountryPage.css'
import BackButton from "../../components/BackButton/BackButton";
const CountryPage = () => {
  const {theme} = useContext(ThemeContext);
  const {country} = useParams();
  const [flag, setFlag] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [name, setName] = useState('');
  const [nativeName, setNativeName] = useState('');
  const [population, setPopulation] = useState('');
  const [subRegion, setSubRegion] = useState('');
  const [region, setRegion] = useState('');
  const [capital, setCapital] = useState('');
  const [tld, setTld] = useState('');
  const [languages, setLanguages] = useState('');
  const [borders, setBorders] = useState([])

  
 
  useEffect(() =>{
    api.get(`name/${country}`).then(response =>{
      setFlag(response.data[0].flags.svg);
      setName(response.data[0].name.official);
      setNativeName(Object.values(Object.values(response.data[0].name.nativeName)[0]));
      setPopulation(response.data[0].population);
      setCapital(response.data[0].capital);
      setRegion(response.data[0].region);
      setSubRegion(response.data[0].subregion);
      setTld(response.data[0].tld);
      setBorders(response.data[0].borders);
      setCurrencies(Object.values(Object.values(response.data[0].currencies)[0]).filter(el => el !== '$' && el !== '€' && el !=='¥'));
      setLanguages(Object.values(Object.values(response.data[0].languages)));
      

  
    });
  }, [])
  return (
    <div className={`main-country-container ${theme}`}>
      <BackButton/>
      <div className={`single-country-container ${theme}`}>
      <div className={`single-country-card ${theme}`}>
      <div className="flag-grid">
        <img src={flag} alt={`${name}, flag`} />
      </div>
      <div className="info-column-1 info-title">
        <h2>{name}</h2> 
        <p>Native Name: <span>{nativeName.toString()}</span></p> 
        <p>Population: <span>{population}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Sub Region: <span>{subRegion}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
      
      <div className="info-column-2 info-title">
        <p>Top Level Domain: <span>{tld}</span> </p>
        <p>Currencies: <span>{currencies.toString()}</span></p>
        <p>Languages: <span>{languages.toString()}</span></p> 
      </div>

      <div className={`border-info info-title ${theme}`}>
        <p>Border Countries: </p>
           {borders && borders.map(border =>(
                  <span>{border}</span>
                ))}  
      </div>
      </div>
      
    </div>
    </div>
    
  )
}

export default CountryPage