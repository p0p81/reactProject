import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import cardsApi from "../../api/cards-api";
import styles from './Details.module.css'
import { authContext } from "../../context/authContext";
import MyModal from "../../utils/Modal";


export default function Details () {

    const [card, setCard] = useState({});
    const {cardId} = useParams();
    const {userId} = useContext(authContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    (async() => {
      const result = await cardsApi.getOne(cardId)
      setCard(result)
    })();
  }, [cardId]);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  const deleteHandler = async() => {
    try { await cardsApi.del(cardId);
        navigate('/catalog')
        
    } catch (error) {
      console.error(error)  

    } finally {
      closeModal();
    }
  }

  const isOwner = userId === card._ownerId

    return (
        <div className={styles.details}>
        <div className={styles.detailsCard}>
          <div className={styles.detailsLeftSection}>
            <div className={styles.detailsPhotoContainer}>
              <img src={card.photo} alt={card.fullName} className={styles.photo} />
            </div>
            <h2>{card.fullName}</h2>
            <p className={styles.profession}>{card.profession}</p>
          </div>
          <div className={styles.detailsRightSection}>
            <p><strong>Experience:</strong> {card.experience} years</p>
            <p><strong>Email:</strong> {card.email}</p>
            <p><strong>Phone:</strong> {card.phone}</p>
          </div>
          {isOwner && (
            <>
              <div className={styles.editBtn}>
                <Link to={`/catalog/${cardId}/edit`}>Edit</Link>
              </div>
              <div className={styles.deleteBtn}>
              <button onClick={openModal}>Delete</button>
              </div>
            </>
          )}
        </div>

        <MyModal isOpen={isModalOpen} onClose={closeModal} onConfirm={deleteHandler} />

        </div>
    )
}