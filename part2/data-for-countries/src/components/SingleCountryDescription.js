import React from 'react'

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
        {<img alt={"flag of the country selected"} style={styleOfImg} src= {countrySelected.flag}></img>}
    </div>
    )
}

export default SingleCountryDescription