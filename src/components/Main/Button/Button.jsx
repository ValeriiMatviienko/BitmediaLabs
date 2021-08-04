import React from 'react';
import './button.scss';

export default function Button({ title, modClass = '' }) {
  return (
    <div className={`wrapper-btn ${modClass}`}>
      <button className={`btn ${modClass}`}>{title}</button>
      <div className={`bottom-layer ${modClass}`}></div>
    </div>
  );
}
