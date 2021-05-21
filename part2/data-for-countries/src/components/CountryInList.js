import React from 'react'


//This represents each of the elements in the list of countries of ListOfCountries, with a bit of styling
const CountryInList = ({countryObject, functionChangeState}) => {
    const buttonStyle = {
        marginLeft: 6,
        maxHeight: 20
    }

    return (
        <>
            <li>{countryObject.name}
            <button onClick={() => functionChangeState(countryObject)} style={buttonStyle}>show</button>
            </li>
        </>
    )
}

export default CountryInList