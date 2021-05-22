import React, { useState, useEffect } from 'react'


const SingleCountryDescription = ({countrySelected}) => {
    const [capitalCity, setCapitalCity] = useState("");

    // console.log(process.env.REACT_APP_KEY_WEATHER);
    const falseKey = "e04abde689b39e92156ed89e6dea89f1"
    
    useEffect(() => {

    }, [])

  fetch(`http://api.weatherstack.com/current?access_key=${falseKey}`).then(resp=>console.log(resp.json()))

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

        <h1>Weather in {countrySelected.capital}</h1>
        <p><b>Temperature: </b> 232</p>
        <img></img>
        <p><b>Wind: </b> 232</p>
    </div>
    )
}

export default SingleCountryDescription