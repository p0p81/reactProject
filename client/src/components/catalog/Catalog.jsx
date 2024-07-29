import React, { useEffect, useState } from "react";
import './Catalog.css'
import { Link } from "react-router-dom";
import cardsApi from "../../api/cards-api";


  


export default function Catalog() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async() => {
      const result = await cardsApi.getAll()
      setCards(result)
    })();
  }, []);

  return (

    <div className="catalog">
      {/* <h1>List Of Experts</h1> */}
      {cards.map((card) => (
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
      ))}
    </div>
  );
}
