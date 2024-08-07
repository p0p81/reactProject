import { useNavigate } from 'react-router-dom';
import './AddCard.css';
import React from 'react';
import { useCreateCard } from '../../hooks/useCards';
import { useForm } from '../../hooks/useForm';



const initialValues = {
    fullName: '',
    email: '',
    experience: '',
    profession: '',
    phone: '',
    photo: '',
}


export default function AddCard() {

    const navigate = useNavigate();
    const createCard = useCreateCard();

    const createHandler = async(values) => {
        try {
            const {_id: cardId} = await createCard(values)
            navigate('/catalog')

        } catch (error) {
            alert(error.message)
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler)



  return (
    <div className="form-card">
      <h2>Add Business Card</h2>
      <form onSubmit={submitHandler}>

        <div className="form-group">
          <label htmlFor="fullName">Name:</label>
            <input
                type="name"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={changeHandler}
                required
            />
        </div>

        <div className="form-group">
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

        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
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

        <div className="form-group">
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

        <div className="form-group">
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

        <div className="form-group">
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

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
