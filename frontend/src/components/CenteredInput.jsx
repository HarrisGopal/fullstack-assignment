import React, { useState, useEffect } from 'react';
import './CenteredInput.css';
import CardList from './CardList';
import axios from 'axios';

const CenteredInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cards');
        setCards(response.data);
        setFilteredCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const results = cards.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(results);
  }, [searchTerm, cards]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="centered-input-container">
        <input
          type="text"
          placeholder="Search by title..."
          className="centered-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <CardList cards={filteredCards} />
    </>
  );
};

export default CenteredInput;
