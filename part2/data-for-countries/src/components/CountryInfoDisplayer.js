import React from 'react'
import SingleCountryDescription from "./SingleCountryDescription.js"
import ListOfCountries from "./ListOfCountries.js"

//This is the component that controls the logic and display of country info
const CountryInfoDisplayer = ({arrayOfCountries}) => {
    if (arrayOfCountries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter.</p>
            </div>
        )    
    }

    //if its between 1 and 10, we just use this component
    else if (arrayOfCountries.length > 1) {
        return (
            <ListOfCountries arrayOfCountries={arrayOfCountries}/>
        )
    }

    else if (arrayOfCountries.length === 1) {
        const countrySelected = arrayOfCountries[0];
        return (
            <SingleCountryDescription countrySelected={countrySelected} />
        )
      }

    //If no country name includes part of the string, this will be the default message
    return (
        <p>
            There's no country with this name in the database.
        </p>
    )
}
    
  
  export default CountryInfoDisplayer