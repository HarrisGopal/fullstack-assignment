import React from 'react';
import './CardList.css';

const CardList = ({ cards }) => {
  if (cards.length === 0) return <p>No cards found.</p>;

  return (
    <div className="card-container">
      <h1>Card List</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card._id}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
