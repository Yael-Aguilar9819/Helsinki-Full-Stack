import React, { useEffect, useState } from 'react'
import CountryInList from "./CountryInList.js"
import SingleCountryDescription from "./SingleCountryDescription.js"

//This is the list of countries that will be rendered, with a button to re-render and make it a single country displayer
const ListOfCountries = ({arrayOfCountries, functionSetText}) => {
    const [showingSingleCountry, setshowingSingleCountry] = useState(false);
    const [countryToShow, setCountryToShow] = useState("");


    const buttonStyle = {
        marginLeft: 6,
        maxHeight: 20
    }
    

    useEffect(() => {
        if (countryToShow === "") {

        }
        else {
            setshowingSingleCountry(true);
        }
    })
        // return <SingleCountryDescription countrySelected={countryObject}/>}
    


    if (showingSingleCountry === false) {
        console.log(arrayOfCountries)
        return (
            <ul>
                {arrayOfCountries.map(countryObject => {
                // return <CountryInList key={countryObject.name} countryObject={countryObject} functionSetText={functionSetText}/>
                return  <>
                <li>{countryObject.name}
                <button onClick={() => setCountryToShow(countryObject)} style={buttonStyle}>show</button>
                </li>
                </>
                } 
                )}
            </ul>
        )            
    }

    else {
        console.log(countryToShow);
        return (
            <SingleCountryDescription countrySelected={countryToShow}/>
        )
    }
}

export default ListOfCountries