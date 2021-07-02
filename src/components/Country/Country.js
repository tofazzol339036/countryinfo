import React from 'react';
import './Country.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryName} = useParams();
    const[country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    })

    const {name, capital, population, region, subregion, area, flag, numericCode, nativeName} = country;
    return (
        <div className="country-style">
            <h1>This the detail of {countryName}</h1>
            <img src={flag} alt="" style={{height: '200px'}}/>
            <h3>Country Name: {name}</h3>
            <h4>Capital Name: {capital}</h4>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub-Region: {subregion}</p>
            <p>Native Name: {nativeName}</p>
            <p>Numeric Code: {numericCode} </p>
        </div>
    );
};

export default Country;