import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import cardsApi from "../../api/cards-api";
import './Details.css'


export default function Details () {

    const [card, setCard] = useState({});
    const {cardId} = useParams();

  useEffect(() => {
    (async() => {
      const result = await cardsApi.getOne(cardId)
      setCard(result)
    })();
  }, [cardId]);

    return (
        <div className="details">
        <div key={card.id} className="catalog-card">
          <div className="left-section">
          <div className="photo-container">
              <img src={card.photoId} alt={card.name} className="photo" />
            </div>
            <h2>{card.name}</h2>
            <p className="profession">{card.profession}</p>
          </div>
          <div className="right-section">
            <p><strong>Experience:</strong> {card.experience} years</p>
            <p><strong>Email:</strong> {card.email}</p>
            <p><strong>Phone:</strong> {card.phone}</p>
          </div>
          <div className="button-details">
            <Link to={`/catalog`}>Edit</Link>
          </div>
          <div className="button-details">
            <Link to={`/catalog`}>Delete</Link>
          </div>
        </div>
        </div>
    )
}