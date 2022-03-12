import Header from './Header';
import '../App.css';
import React from 'react';
import SearchBar from './SearchBar';
import GrapeData from "../Data.json";
import WineControl from './WineControl';
import Signup from './Signup';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Header />

        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: " 400px" }}>
              <Router>
                <AuthProvider>
                  <Routes>
                    <PrivateRoute exact path="/" element={<WineControl />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                  </Routes>
                </AuthProvider>
              </Router>
            </div>
        </Container>

      <SearchBar placeholder="Enter a grape..." data={GrapeData} />
      </div>
    </React.Fragment> 
  );
}

export default App;
