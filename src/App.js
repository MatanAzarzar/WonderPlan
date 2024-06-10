import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignInPage from './components/SignInPage';
import RegisterPage from './components/RegisterPage';
import CreateTrip from './components/CreateTrip';
import EditTrip from './components/EditTrip';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/createTrip" element={<CreateTrip />} />
          <Route path="/editTrip" element={<EditTrip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
