import React from 'react'
import CountryInList from "./CountryInList.js"

const ListOfCountries = ({arrayOfCountries}) => {
    return (
        <ul>
            {arrayOfCountries.map(countryObject => {
                return <CountryInList key={countryObject.name} countryObject={countryObject}/>
            } 
            )}
        </ul>
    )
}

export default ListOfCountries