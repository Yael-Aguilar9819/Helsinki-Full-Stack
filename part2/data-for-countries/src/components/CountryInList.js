import React from 'react'

const CountryInList = ({countryObject, functionSetText}) => {
    const buttonStyle = {
        marginLeft: 6,
        maxHeight: 20
    }
    
    return (
        <>
            <li>{countryObject.name}
            <button onClick={() => functionSetText(countryObject.name.toLowerCase())} style={buttonStyle}>show</button>
            </li>
        </>
    )
}

export default CountryInList