import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../config/api";
import './CountryPage.css'
const CountryPage = () => {
  const {theme} = useContext(ThemeContext);
  const {country} = useParams();
  const [data, setData] = useState([]);
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
      setCurrencies(Object.values(Object.values(response.data[0].currencies)[0]).filter(el => el !== '$'));
      setLanguages(Object.values(Object.values(response.data[0].languages)));
      

  
    });
  }, [])
  return (
    <div className={`single-country-container ${theme}`}>
      <div className={`single-country-card ${theme}`}>
      <div>
        <img src={flag} alt={`${name}, flag`} />
      </div>
      <h2>{name}</h2> 
      <p>Native Name: {nativeName.toString()}</p> 
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Sub Region: {subRegion}</p>
      <p>Capital: {capital}</p>
      <p>Top Level Domain{tld}</p>
      <p>Currencies: {currencies.toString()}</p>
      <p>Languages: {languages.toString()}</p> 
      {/* <p>{borders.toString()}</p> */}
      {/* {currencies && currencies.map(currencie =>(
        <p><span>{currencie}</span></p>
      ))} */}

     {/* { {languages && languages.map(language =>(
              <p><span>{language}</span></p>
            ))} */}
      <p>Border Countries: </p>
      {borders && borders.map(border =>(
              <span>{border}</span>
            ))} 
      </div>
      
    </div>
  )
}

export default CountryPage