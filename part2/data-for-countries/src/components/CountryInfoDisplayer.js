import React from 'react'
import SingleCountryDescription from "./SingleCountryDescription.js"

//This is the component that controls the logic and display of country info
const CountryInfoDisplayer = ({arrayOfCountries}) => {
    if (arrayOfCountries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter.</p>
            </div>
        )    
    }

    else if (arrayOfCountries.length > 1) {
        return (
            <ul>
                {arrayOfCountries.map(countryObject => {
                    return <li key={countryObject.name}>{countryObject.name}</li>}
                )}
            </ul>
        )
    }

    else if (arrayOfCountries.length === 1) {
        const countrySelected = arrayOfCountries[0];
        return (
            <SingleCountryDescription countrySelected={countrySelected}/>
        )
      }

    return (
        <p>
            There's no country with this name in the database
        </p>
    )
}
    
  
  export default CountryInfoDisplayer