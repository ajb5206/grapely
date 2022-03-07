import Header from './Header';
import '.././App.css';
import React from 'react';
import SearchBar from './SearchBar';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Header />
      <SearchBar />
      </div>
    </React.Fragment> 
  );
}

export default App;
