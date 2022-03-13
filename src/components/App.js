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
import Grape from './Grape';
import Logout from './Logout';


function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Header />
      <SearchBar placeholder="Enter a grape..." data={GrapeData} />
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}>
            <div className="w-100" style={{ maxWidth: " 400px" }}>
              <Router>
                <AuthProvider>
                  <Routes>
                    {/* <Route path='/' element={<PrivateRoute />}><Route element={<WineControl />} /></Route> */}
                    {/* <PrivateRoute exact path="/" element={<WineControl />} /> */}
                    <Route path="/" element={<PrivateRoute><WineControl /></PrivateRoute>}/>
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/grape' element={<Grape />} />
                    <Route path='/logout' element={<Logout />} />
                  </Routes>
                </AuthProvider>
              </Router>
            </div>
        </Container>
      </div>
    </React.Fragment> 
  );
}

export default App;
