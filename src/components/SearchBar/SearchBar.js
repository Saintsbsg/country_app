import './SearchBar.css'
import { useState } from 'react'
import { useContext } from 'react';
import { RegionContext } from '../../context/RegionContext';
import { CountryContext } from '../../context/CountryContext';
import { ThemeContext } from '../../context/ThemeContext';
const SearchBar = () => {
    const {region, setRegion} = useContext(RegionContext)
    const {setCountry} = useContext(CountryContext);
    const {theme} = useContext(ThemeContext);
    const [value, setValue] = useState('Filter');
    const handleChange = (e) =>{
        setValue(e.target.value);
        setRegion(e.target.value);
    }

    const handleCountry = (e) =>{
        setCountry(e.target.value);
    }
  return (
    <form className={`search-form ${theme} `}>
        <div className={`input-icons ${theme}`}>
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <input className={`search-input ${theme}`} type="text" placeholder='Search for a country...' onChange={handleCountry} />
        </div>
        <select className={`select ${theme}`} value={region}  name="country filter"  onChange={handleChange}>
        <option defaultValue="selected" value="default">Filter by Region</option>
            <option value="americas">Americas</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
        </select>
    </form>
  )
}

export default SearchBar