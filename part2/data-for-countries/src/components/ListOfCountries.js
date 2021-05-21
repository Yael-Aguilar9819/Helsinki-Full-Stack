import React from 'react'
import CountryInList from "./CountryInList.js"

const ListOfCountries = ({arrayOfCountries, functionSetText}) => {

    return (
        <ul>
            {arrayOfCountries.map(countryObject => {
                return <CountryInList key={countryObject.name} countryObject={countryObject} functionSetText={functionSetText}/>
            } 
            )}
        </ul>
    )
}

export default ListOfCountries