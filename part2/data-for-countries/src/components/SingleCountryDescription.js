import React from 'react'
import WeatherCapitalCity from './WeatherCapitalCity'


const SingleCountryDescription = ({countrySelected}) => {
    const styleOfImg = {
        maxWidth: 150, 
        maxHeight: 150
    }
    

    return (
        <div>
        <h1>{countrySelected.name}</h1>
        <p>Capital: {countrySelected.capital}</p>
        <p>Population: {countrySelected.population}</p>
        <h2>Languages</h2>
        <ul>
            {countrySelected.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img alt={`Flag of ${countrySelected.name}`} style={styleOfImg} src={countrySelected.flag}></img>

        <WeatherCapitalCity capitalCity={countrySelected.capital} imgStyle={styleOfImg}/>
    </div>
    )
}

export default SingleCountryDescription