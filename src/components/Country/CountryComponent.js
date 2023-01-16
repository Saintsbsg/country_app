import './CountryComponent.css'
import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import { RegionContext } from '../../context/RegionContext'
import { CountryContext } from '../../context/CountryContext'
import { ThemeContext } from '../../context/ThemeContext'
import api from '../../config/api'
import SearchBar from '../SearchBar/SearchBar'

const CountryComponent = () => {
   

    const {region} = useContext(RegionContext);
    const {country} = useContext(CountryContext);
    const {theme} = useContext(ThemeContext);
    const [data, setData] = useState([]);
    useEffect(() =>{
      api.get('/currency/dollar').then(response =>{
         setData([...response.data])
    }).catch((e) => {
      console.log(e.message)
    })
    }, [])

    useEffect(() =>{
      if(region === 'default'){
        api.get('/currency/dollar').then(response =>{
          setData([...response.data]);
        })
      }else{
      api.get(`region/${region}`).then(response =>{
        
        setData([...response.data])
    }).catch((e) =>{
      console.log(e.message);
    })
      }

    }, [region])

    useEffect(() =>{
      api.get(`name/${country}`).then(response =>{
        setData([...response.data])
    }).catch((e) =>{
      console.log(e.message)
    })
    }, [country])

    useEffect(() =>{
      api.get(`name/`).then(response =>{
        setData([...response.data]);
    }).catch(e => {
      console.log(e.message)
    })
    }, )

    

  
  return (
    <>
    <SearchBar/>
    <div className={`country-container ${theme}`}>
       {data && data.map(country => (
        <Link key={country.ccn3} className='link-card' to={`/country/${country.name.official}`}>
          <div className='card-content'>
            <img src={`${country.flags.svg}`} alt={`${country.name.official} flag`} />
            <div  className={`country-card ${theme}`}>
              <h2>{country.name.official}</h2>
              <p>Population: {country.population.toFixed()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital && country.capital[0] ? country.capital[0] : " " || ""}</p> 
            </div>
        </div>
        </Link>
       
      ))} 
    </div>
    </>
  )
}

export default CountryComponent
