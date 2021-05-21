import React from 'react'

const ListOfCountries = ({arrayOfCountries}) => {
    return (
        <ul>
            {arrayOfCountries.map(countryObject => {
                return <li key={countryObject.name}>{countryObject.name}</li>}
            )}
        </ul>
    )
}

export default ListOfCountries