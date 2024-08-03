import React, { useEffect, useState } from "react";
import styles from './Catalog.module.css';
import { Link } from "react-router-dom";
import cardsApi from "../../api/cards-api";

export default function Catalog() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await cardsApi.getAll();
      setCards(result);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h1>List Of Experts</h1>
    <div className={styles.catalog}>
      {cards.map((card) => (
        <div key={card._id} className={styles.catalogCard}>
          <div className={styles.leftSection}>
            <div className={styles.photoContainer}>
              <img src={card.photo} alt={card.fullName} className={styles.photo} />
            </div>
            <h2>{card.fullName}</h2>
            <p className={styles.profession}>{card.profession}</p>
          </div>
          <div className={styles.rightSection}>
            <p><strong>Experience:</strong> {card.experience} years</p>
            <p><strong>Email:</strong> {card.email}</p>
            <p><strong>Phone:</strong> {card.phone}</p>
          </div>
          <div className={styles.buttonDetails}>
            <Link to={`/catalog/${card._id}/details`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
