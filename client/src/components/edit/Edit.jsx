import React, {useEffect, useState} from "react";
import styles from './Edit.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneCard } from "../../hooks/useCards";

import cardsApi from "../../api/cards-api";
import { useForm } from "../../hooks/useForm";



export default function EditCard() {
    const navigate = useNavigate();
    const {cardId} = useParams();
    const [cardData, setCardData] = useGetOneCard(cardId);
    const [error, setError] = useState(null);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(cardData, async (values) => {

        try {
            await cardsApi.edit(cardId, values);
            navigate(`/catalog/${cardId}/details`);

        } catch (error) {
            setError(error.message)
        }
    });

    useEffect(() => {
        setCardData(cardData);

    }, [cardData, setCardData]);


    return (
        <div className={styles.formCard}>
      <h2>Edit Business Card</h2>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <form onSubmit={submitHandler}>

        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
            <input
                type="name"
                id="name"
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={changeHandler}
                required
            />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={values.email}
                onChange={changeHandler}
                required
            />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="age">Experience:</label>
            <input
                type="text"
                id="experience"
                name="experience"
                placeholder="Years Of Experience"
                value={values.experience}
                onChange={changeHandler}
                required 
                />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="profession">Profession:</label>
            <input
                type="text"
                id="profession"
                name="profession"
                placeholder="Profession"
                value={values.profession}
                onChange={changeHandler}
                required
            />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Contact Number:</label>
            <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={values.phone}
                onChange={changeHandler}
                required
            />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="photo">Photo:</label>
            <input
                type="text"
                id="photo"
                name="photo"
                placeholder="Upload Photo"
                value={values.photo}
                onChange={changeHandler}
                required
            />
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
    )

}