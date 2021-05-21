import React from 'react'

const SingleCountryDescription = ({countrySelected}) => {
    return (
        <div>
        <h1>{countrySelected.name}</h1>
        <p>Capital: {countrySelected.capital}</p>
        <p>Population: {countrySelected.population}</p>
        <h2>Languages</h2>
        <ul>
            {countrySelected.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <p>flag: {<img src= {countrySelected.flag}></img>}  </p>
    </div>
    )
}

export default SingleCountryDescription