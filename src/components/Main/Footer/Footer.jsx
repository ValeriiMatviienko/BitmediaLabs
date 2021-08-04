import React from 'react';
import Button from '../Button/Button';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__top">
            <input
              className="footer__input"
              type="email"
              placeholder="Enter your email"
            />
            <div className="footer__btn">
              <Button title="Subscribe" modClass="footer_mod" />
            </div>
          </div>
          <div className="footer__bottom">
            <h2 className="footer__logo">AppCo</h2>
            <div className="footer__themeTags">
              All rights reserved by ThemeTags
            </div>
            <div className="footer__copyrights">Copyrights &#169; 2021.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
