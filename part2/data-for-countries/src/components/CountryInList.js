import React from 'react'

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