import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("")


  //This is using the Controlled Component approach
  //Without this function, it would be a read-only input
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <div style={{margin: 10}}>
        <p>Find Countries</p>
        <SearchBar valueOfField={searchText} functionThatControlsChange={handleSearchTextChange}/>
    </div>
  );
}

export default App;
