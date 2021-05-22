import React, { useEffect, useState } from 'react'
import CountryInList from "./CountryInList.js"
import SingleCountryDescription from "./SingleCountryDescription.js"

//This is the list of countries that will be rendered, with a button to re-render and make it a single country displayer
const ListOfCountries = ({arrayOfCountries}) => {
    const [showingSingleCountry, setshowingSingleCountry] = useState(false);
    const [countryToShow, setCountryToShow] = useState("");

    //Using useEffect we can always have an "observer" than can rerender the component if necesary
    useEffect(() => {
        if (countryToShow !== "") {
            setshowingSingleCountry(true);
        }
    }, [countryToShow])

    //this is simple, if it's not showing a single country, it list the possible countries
    if (showingSingleCountry === false) {
        return (
            <ul>
                {arrayOfCountries.map(countryObject => {
                return <CountryInList key={countryObject.name} countryObject={countryObject} functionChangeState={setCountryToShow}/>
                })}
            </ul>
        )            
    }

    //otherwise it shows the Single country description of the country selected with the button
    else {
        return (
            <SingleCountryDescription countrySelected={countryToShow}/>
        )
    }
}

export default ListOfCountries