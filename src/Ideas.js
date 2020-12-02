import React from 'react';
import './Ideas.css';
import Card from './Card.js';

const Ideas = ({ ideas }) => {
  const ideasCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    <section className="ideas-container">
      { ideasCards }
    </section>
  )
}

export default Ideas;
