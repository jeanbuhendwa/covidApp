import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import FetchStats from '../store/api';
import { GetStats } from '../store/reducer';

const HomePage = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (CountryStore.length === 0) {
      FetchStats().then((response) => dispatch(GetStats(response)));
    }
  }, [CountryStore.length, dispatch]);

  const Africa = CountryStore.filter((item) => item.continent === 'Africa');
  const header = 'Get Covid Stats in Africa';
  return (
    <>
      <div className="branding">
        <h1 className="brand-text">{header}</h1>
      </div>
      <ul className="countries-container">
        {Africa.map((country) => (
          <Link
            key={country.country}
            to={{ pathname: `/country/${country.country}` }}
          >
            <li className="countryDetails">
              <div>
                <img
                  src={country.country_flag}
                  alt="flag"
                  className="country-flag"
                />
              </div>

              <div>
                <h2 className="country-title">{country.country}</h2>
                <p className="country-pop">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  {' '}
                  <span className="pop-span">{country.population}</span>
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default HomePage;
