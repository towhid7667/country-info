import React from 'react';
import "./Country.css"

const Country = (props) => {
    const {name , flags ,population, region, area} = props
    return (
        <div className='Country-here'>
            <img src={flags.png} alt="" />
            <h2>Country: {name}</h2>
            <h4>Population: {population}</h4>
            <h4>Region: {region} </h4>
            <h4>Area:{area}</h4>
        </div>
    );
};

export default Country;