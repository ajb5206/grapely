import Header from './Header';
import '../App.css';
import React from 'react';
import SearchBar from './SearchBar';
import GrapeData from "../Data.json"

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Header />
      <SearchBar placeholder="Enter a grape..." data={GrapeData} />
      </div>
    </React.Fragment> 
  );
}

export default App;
