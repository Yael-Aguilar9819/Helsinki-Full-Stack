import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import './App.css';
import CountryInfoDisplayer from './components/CountryInfoDisplayer';

function App() {
  const [matchingCountries, setmatchingCountries] = useState([])
  const [searchText, setSearchText] = useState("")


  //This is using the Controlled Component approach
  //Without this function, it would be a read-only input
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value.toLowerCase())
  }

  //The access point to the Rest Api
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(resp => resp.json())
    .then(countryData => setmatchingCountries(countryData))  
  }, [])

    //Just the old terneary operator to see if the string it's empty 
  const falseIfStringEmpty = str => str.length === 0 ? false : true

  //this return the custom filter function 
  const filterAboutCountryName = () => {
    if (!falseIfStringEmpty(searchText)) return elem => elem

    const filah = countryObject => countryObject.name.toLowerCase().includes(searchText);
    return filah
  }

  return (
    <div style={{margin: 10}}>
        <p>Find Countries</p>
        <SearchBar valueOfField={searchText} functionThatControlsChange={handleSearchTextChange}/>
        <CountryInfoDisplayer arrayOfCountries={matchingCountries.filter(filterAboutCountryName())} functionSetText={setSearchText}/>
    </div>
  );
}

export default App;
