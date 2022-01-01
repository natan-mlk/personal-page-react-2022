import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { NavLink, Routes, Route } from "react-router-dom";
// import { Route } from "react-router";
import Gallery from './components/Gallery';
import About from './components/About';

//  https://reactrouter.com/docs/en/v6/upgrading/v5

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <div className="content">
          <div className="content__navigation">
            <ul>
              <li>
                <NavLink to="/">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/about" >About me</NavLink>
              </li>
            </ul>
          </div>

          <div className="content__display">
            <Routes>
              <Route path="/" element={<Gallery/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
