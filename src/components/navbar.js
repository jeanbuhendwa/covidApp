import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { TiArrowBackOutline } from 'react-icons/ti';
// import logo from "../images/logo.png";

const NavBar = () => {
  // <TiArrowBackOutline className="goBack" />
  const detailsNav = 'Go Back';
  const header = 'Corona Africa Checker';
  const location = useLocation();
  const goBack = location.pathname.includes('country') ? detailsNav : '';

  return (
    <nav>
      <div className="nav1">
        <NavLink exact="true" to={{ pathname: '/' }}>
          {goBack}
        </NavLink>
        <h1 className="header1">CoviData</h1>
      </div>
      <div className="nav2">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <h1 className="header2">{header}</h1>
      </div>
    </nav>
  );
};

export default NavBar;
