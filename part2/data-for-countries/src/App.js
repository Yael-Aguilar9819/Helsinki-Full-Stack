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
    setSearchText(event.target.value)
  }

  //The access point to the Rest Api
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(resp => resp.json())
    .then(countryData => setmatchingCountries(countryData))  
  }, [])


  return (
    <div style={{margin: 10}}>
        <p>Find Countries</p>
        <SearchBar valueOfField={searchText} functionThatControlsChange={handleSearchTextChange}/>
        <CountryInfoDisplayer arrayOfCountries={matchingCountries}/>
    </div>
  );
}

export default App;
