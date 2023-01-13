import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../config/api";
import './Country.css'
const Country = () => {
  const {theme} = useContext(ThemeContext);
  const {country} = useParams();
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');
  const [subRegion, setSubRegion] = useState('');
  const [region, setRegion] = useState('');
  const [capital, setCapital] = useState('');
  const [tld, setTld] = useState('');
  const [languages, setLanguages] = useState('');
  const [borders, setBorders] = useState([])

  
  console.log(country)
  useEffect(() =>{
    api.get(`name/${country}`).then(response =>{
      console.log(response.data);
      setData([...response.data]);
      setFlag(response.data[0].flags.svg);
      setName(response.data[0].name.nativeName);
      setPopulation(response.data[0].population);
      setCapital(response.data[0].capital);
      setRegion(response.data[0].region);
      setSubRegion(response.data[0].subregion);
      setTld(response.data[0].tld);
      setBorders(response.data[0].borders)
      let moeda = response.data[0].currencies;
      let languages = response.data[0].languages;
      let natName = response.data[0].name.nativeName;
      let currencieAux = [];
      let langAux = [];
      let nameAux = [];

      for(let currencie in moeda){
        currencieAux.push(moeda[currencie].name)
      }

      for(let lang in languages){
        langAux.push(languages[lang])
      }

      for(let name in natName){
        console.log(natName[name].official)
        nameAux.push(natName[name].official)
      }

      

      setCurrencies(currencieAux)
      setLanguages(langAux)
      setName(nameAux)
      console.log(languages)
      
    });
  }, [])
  return (
    <div className={`country-container ${theme}`}>
      <div className={`country-card ${theme}`}>
      <div>
        <img src={flag} alt={`${name}, flag`} />
      </div>
      <h2>{name}</h2> 
      <p>{population}</p>
      <p>{region}</p>
      <p>{subRegion}</p>
      <p>{capital}</p>
      <p>{tld}</p>
      <p>{currencies.toString()}</p>
      <p>{languages.toString()}</p>
      {/* <p>{borders.toString()}</p> */}
      {/* {currencies && currencies.map(currencie =>(
        <p><span>{currencie}</span></p>
      ))} */}

     {/* { {languages && languages.map(language =>(
              <p><span>{language}</span></p>
            ))} */}

      {borders && borders.map(border =>(
              <span>{border}</span>
            ))} 
      </div>
      
    </div>
  )
}

export default Country