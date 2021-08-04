import React from 'react';
import ListCards from './ListCards/ListCards';
import './whyApp.scss';

export default function WhyAppCo() {
  return (
    <section className="whyAppCo">
      <div className="container">
        <div className="whyAppCo__content">
          <h2 className="whyAppCo__title">
            Why <b>small business owners love</b> AppCo?
          </h2>
          <h4 className="whyAppCo__subtitle">
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </h4>
          <div className="whyAppCo__cards">
            <ListCards />
          </div>
        </div>
      </div>
    </section>
  );
}
