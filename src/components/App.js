import Header from './Header';
import '../App.css';
import React from 'react';
import SearchBar from './SearchBar';
import GrapeData from "../Data.json";
import WineControl from './WineControl';
import Signup from './Signup';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Header />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: " 400px" }}>
            <Signup />
          </div>
      </Container>
      <SearchBar placeholder="Enter a grape..." data={GrapeData} />
      <WineControl />
      </div>
    </React.Fragment> 
  );
}

export default App;
