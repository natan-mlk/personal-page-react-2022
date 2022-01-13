import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { NavLink, Routes, Route } from "react-router-dom";
// import { Route } from "react-router";
import Gallery from './components/Gallery';
import About from './components/About';

//  https://reactrouter.com/docs/en/v6/upgrading/v5

const App = () => {
  return (
    <div className="app">
      <div className="app-body">
        <div className="content">
          <div className="content__navigation">
            <div className="navigation__wrapper">
              <div className="navigation__name">
                Adam Milko
              </div>

              <NavLink to="/"
                className={(navData)=> navData.isActive ? 'navigation__link navigation__link--active' : 'navigation__link'}>
                Gallery
              </NavLink>

              <NavLink to="/about"
                className={(navData)=> navData.isActive ? 'navigation__link navigation__link--active' : 'navigation__link'}>
                About me
              </NavLink>

              <NavLink to="/about"
                className={(navData)=> navData.isActive ? 'navigation__link navigation__link--active' : 'navigation__link'}>
                Something
              </NavLink>

            </div>
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
