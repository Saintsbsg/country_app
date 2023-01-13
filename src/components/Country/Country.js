import './Country.css'
import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import { RegionContext } from '../../context/RegionContext'
import { CountryContext } from '../../context/CountryContext'
import { ThemeContext } from '../../context/ThemeContext'
import api from '../../config/api'

const CountryComponent = () => {
   

    const {region, setRegion} = useContext(RegionContext);
    const {country, setCountry} = useContext(CountryContext);
    const {theme} = useContext(ThemeContext);
    const [data, setData] = useState([]);
    useEffect(() =>{
      api.get('/currency/dollar').then(response =>{
        console.log(response.data)
         setData([...response.data])
    }).catch((e) => {
      console.log(e.message)
    })
    }, [])

    useEffect(() =>{
      api.get(`region/${region}`).then(response =>{
        /* console.log(response.data) */
        setData([...response.data])
    }).catch((e) =>{
      console.log(e.message)
    })
    }, [region])

    useEffect(() =>{
      api.get(`name/${country}`).then(response =>{
        /* console.log(response.data) */
        setData([...response.data])
    }).catch((e) =>{
      console.log(e.message)
    })
    }, [country])

    useEffect(() =>{
      api.get(`name/`).then(response =>{
        /* console.log(response.data) */
        setData([...response.data]);
    }).catch(e => {
      console.log(e.message)
    })
    }, )

    

  
  return (
    <div className={`country-container ${theme}`}>
       {data && data.map(country => (
        <>
         <div className='img-container'>
          <img src={`${country.flags.svg}`} alt="" />
          </div>
        <div key={country.ccn3} className={`country-card ${theme}`}>
        <h2>{country.name.official}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital && country.capital[0] ? country.capital[0] : " " || ""}</p> 
        <Link className={`btn ${theme}`} to={`/country/${country.name.official}`}>Show More</Link>
        </div>
        </>
      ))} 
    </div>
  )
}

export default CountryComponent
