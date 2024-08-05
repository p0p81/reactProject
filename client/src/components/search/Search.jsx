import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import cardsApi from "../../api/cards-api";
import "./Search.css";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); 

  const handleSearch = async (searchInput) => {
    const result = await cardsApi.getAll();
    const filteredResults = result.filter(card =>
      card.profession.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredResults);
    setSearchPerformed(true); 
  };

  return (
    <div className="search-page">
      <SearchBar onSearch={handleSearch} />
      <div className="results-container">
        {searchPerformed && searchResults.length === 0 ? (
          <p className="no-results">No results found</p>
        ) : (
          searchResults.map((card) => (
            <div key={card._id} className="catalog-card">
              <div className="left-section">
                <div className="photo-container">
                  <img src={card.photo} alt={card.fullName} className="photo" />
                </div>
                <h2>{card.fullName}</h2>
                <p className="profession">{card.profession}</p>
              </div>
              <div className="right-section">
                <p><strong>Experience:</strong> {card.experience} years</p>
                <p><strong>Email:</strong> {card.email}</p>
                <p><strong>Phone:</strong> {card.phone}</p>
              </div>
              <div className="button-details">
                <Link to={`/catalog/${card._id}/details`}>Details</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
