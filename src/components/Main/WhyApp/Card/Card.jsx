import React from 'react';
import './card.scss';

export default function Card({ img, title, text }) {
  return (
    <div className="card">
      <img className="card__img" src={img} alt={title} />
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </div>
  );
}
