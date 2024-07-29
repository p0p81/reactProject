import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import cardsApi from "../../api/cards-api";
import './Details.css'


export default function Details () {

    const [card, setCard] = useState({});
    const {cardId} = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    (async() => {
      const result = await cardsApi.getOne(cardId)
      setCard(result)
    })();
  }, [cardId]);

  const deleteHandler = async() => {
    try { await cardsApi.del(cardId);
        navigate('/catalog')
        
    } catch (error) {
        
    }
  }

    return (
        <div className="details">
        <div className="details-card">
          <div className="details-left-section">
          <div className="details-photo-container">
              <img src={card.photo} alt={card.fullName} className="photo" />
            </div>
            <h2>{card.fullName}</h2>
            <p className="profession">{card.profession}</p>
          </div>
          <div className="details-right-section">
            <p><strong>Experience:</strong> {card.experience} years</p>
            <p><strong>Email:</strong> {card.email}</p>
            <p><strong>Phone:</strong> {card.phone}</p>
          </div>
          <div className="button-edit">
            <Link to={`/catalog`}>Edit</Link>
          </div>
          <div className="button-delete">
            <Link to={'/catalog'} onClick={deleteHandler}>Delete</Link>
          </div>
        </div>
        </div>
    )
}