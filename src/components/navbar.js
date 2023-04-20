import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faGear,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const detailsNav = <FontAwesomeIcon icon={faArrowLeft} />;

  const location = useLocation();
  const goBack = location.pathname.includes('country') ? detailsNav : '';

  return (
    <nav className="main-nav">
      <div className="nav-menu">
        <NavLink exact="true" to={{ pathname: '/' }} className="backLink">
          {goBack}
          {' '}
          2023
        </NavLink>
        <h1 className="title-header">
          Covi
          <span className="title-span">Stats</span>
        </h1>
        <div className="menu-icons">
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
