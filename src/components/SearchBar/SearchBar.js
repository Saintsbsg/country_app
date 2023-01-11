import './SearchBar.css'
import { useState } from 'react'
import { useContext } from 'react';
import { RegionContext } from '../../context/RegionContext';
import { CountryContext } from '../../context/CountryContext';
const SearchBar = () => {
    const {region, setRegion} = useContext(RegionContext)
    const {country, setCountry} = useContext(CountryContext);
    const [value, setValue] = useState('Filter');
    const handleChange = (e) =>{
        setValue(e.target.value);
        setRegion(e.target.value);
    }

    const handleCountry = (e) =>{
       
            setValue(e.target.value);
            setCountry(e.target.value);
        
        
    }
  return (
    <form className='search-form'>
        <div className='input-icons'>
        <i class="fa-solid fa-magnifying-glass icon"></i>
        <input className='search-input' type="text" placeholder='Search for a country...' onChange={handleCountry} />
        </div>
        <h1>{country}</h1>
        <select className='select' value={country}  name="country filter"  onChange={handleChange}>
        <option defaultValue="selected" value="Default">Filter by Region</option>
            <option value="americas">Americas</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
        </select>
    </form>
  )
}

export default SearchBar