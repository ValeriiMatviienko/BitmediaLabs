import React from 'react';
import { dataCards } from './dataCards';
import Card from '../Card/Card';
import './listCards.scss';

export default function ListCards() {
  const listCards = dataCards.map(({ img, title, text }) => {
    return <Card img={img} title={title} text={text} key={text} />;
  });
  return <div className="listCards">{listCards}</div>;
}
