import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./countries.css"


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <div className='countries'>
            {
                countries.map(country => <Country name={country.name.common} flags = {country.flags} population = {country.population} region={country.region} area={country.area}/>)
            }
            </div>
            
            
        </div>
    );
};

export default Countries;