import React from 'react';
import './Card.css';

const Card = ({ title, description, id }) => {
  return (
    <section className='card'>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <button>X</button>
    </section>
  )
}

export default Card;
