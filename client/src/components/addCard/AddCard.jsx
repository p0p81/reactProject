import './AddCard.css';
import React from 'react';

export default function AddCard() {
  return (
    <div className="form-card">
      <h2>Add Business Card</h2>
      <form>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
            <input
                type="name"
                id="name"
                name="name"
                placeholder="First & Last Name"
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
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="age">Experience:</label>
            <input
                type="text"
                id="experience"
                name="experience"
                placeholder="Years Of Experience"
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
                required
            />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
