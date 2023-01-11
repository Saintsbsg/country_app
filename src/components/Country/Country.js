import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import { RegionContext } from '../../context/RegionContext'
import { CountryContext } from '../../context/CountryContext'
const CountryComponent = () => {
    const api = axios.create({
      baseURL: 'https://restcountries.com/v3.1/name/usa'
    })

    const {region, setRegion} = useContext(RegionContext);
    const {country, setCountry} = useContext(CountryContext);
    const [name, setNome] = useState('');
    const [population, setPopulation] = useState('');
    /* const [region, setRegion] = useState(''); */
    const [capital, setCapital] = useState('');
    const [flag, setFlag] = useState('');
    const [data, setData] = useState([]);
    useEffect(() =>{
      axios.get('https://restcountries.com/v3.1/currency/dollar').then(response =>{
        /* console.log(response.data) */
        setData([...response.data])
    })
    }, [])

    useEffect(() =>{
      axios.get(`https://restcountries.com/v3.1/region/${region}`).then(response =>{
        /* console.log(response.data) */
        setData([...response.data])
    })
    }, [region])

    useEffect(() =>{
      axios.get(`https://restcountries.com/v3.1/name/${country}`).then(response =>{
        /* console.log(response.data) */
        setData([...response.data])
        console.log(country);
    })
    }, [country])

    useEffect(() =>{
      axios.get(`https://restcountries.com/v3.1/name/`).then(response =>{
        /* console.log(response.data) */
        setData([...response.data]);
    })
    }, )
  /*   axios.get('https://restcountries.com/v3.1/name/usa').then(response =>{
        setNome(response.data[0].name.official); 
        setPopulation(response.data[0].population);
        setRegion(response.data[0].region);
        setCapital(response.data[0].capital[0]);
        setFlag(response.data[0].flags.png);
    }); */



  
  return (
    <div>
       {data && data.map(country => (
        <div>
         <img src={`${country.flags.png}`} alt="" />
        <p>Name: {country.name.official}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
       {<p>Capital: {country.capital && country.capital[0] ? country.capital[0] : " " || ""}</p> }
        </div>
      ))} 
        {/* <h1>Country</h1>
        <img src={`${flag}`} alt="" />
        <p>Name: {name}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p> */}
    </div>
  )
}

export default CountryComponent