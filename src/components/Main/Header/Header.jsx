import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './header.scss';

function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="header__logo">AppCo</div>
        <div className="header__content">
          <div className="header__text">
            <h1 className="header__title">
              <b>Brainstorming</b> for desired perfect Usability
            </h1>
            <h4 className="header__subtitle">
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </h4>
            <Link to="/usersStatistics">
              <Button title="View Stats" />
            </Link>
          </div>
          <div className="header__img">
            <img
              className="header__img-phone"
              src={require('./images/mobile.png').default}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
