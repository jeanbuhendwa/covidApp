import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBedPulse,
  faBookSkull,
  faCalendarPlus,
  faCircleCheck,
  faUsersLine,
  faVirusCovidSlash,
} from '@fortawesome/free-solid-svg-icons';
import FetchStats from '../store/api';
import { GetStats } from '../store/reducer';

const Country = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  const findCountry = CountryStore.find((country) => country.country === name);

  useEffect(() => {
    if (CountryStore.length === 0) {
      FetchStats().then((response) => dispatch(GetStats(response)));
    }
  });

  return (
    <section className="country-detail">
      <div className="branding about-brand">
        <h1 className="brand-text">{findCountry.country}</h1>
      </div>
      <article className="current-stats">
        <h3>Today&apos;s update:</h3>
        <ul className="current-case">
          <li>
            <FontAwesomeIcon icon={faCalendarPlus} className="current-icon" />

            {findCountry.todays_cases}
            <span className="current-text">New cases</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBookSkull} className="current-icon" />

            {findCountry.todays_deaths}
            <span className="current-text">New Death</span>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faVirusCovidSlash}
              className="current-icon"
            />
            {' '}
            {findCountry.todays_recovered}
            <span className="current-text">New recovery</span>
          </li>
        </ul>
      </article>
      <article className="total-case">
        <h3>Total:</h3>
        <ul className="current-total">
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="current-icon" />
            {findCountry.total_cases}
            <span className="current-text">Confirmed cases</span>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faVirusCovidSlash}
              className="current-icon"
            />
            {findCountry.total_recovered}
            <span className="current-text">Recovered</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBedPulse} className="current-icon" />
            {findCountry.total_active}
            <span className="current-text">Active Cases</span>
          </li>
        </ul>
      </article>
      <article className="general">
        <ul>
          <li>
            <FontAwesomeIcon icon={faUsersLine} className="general-icon" />
            <span className="current-text">Total Tests:</span>
            {findCountry.total_tests}
          </li>
          <li>
            <FontAwesomeIcon icon={faBookSkull} className="general-icon" />
            <span className="current-text">Deaths:</span>
            {findCountry.total_deaths}
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Country;
