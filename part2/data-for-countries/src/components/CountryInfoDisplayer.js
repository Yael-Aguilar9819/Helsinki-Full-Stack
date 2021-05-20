import React from 'react'

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
                {arrayOfCountries.map(countryName => <li>countryName</li>)}
            </ul>
        )
    }

    return (
        <div>
        </div>
    )
  }
  
  export default CountryInfoDisplayer