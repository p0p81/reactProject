import React from "react";
import './Catalog.css'

const items = [
    {
      id: 1,
      name: 'Kiril Tonev',
      age: 45,
      email: 'k.tonev@gmail.com',
      phone: '123-456-7890',
      profession: 'Electrician',
      photoId: 'https://media.istockphoto.com/id/1049775258/photo/smiling-handsome-electrician-repairing-electrical-box-with-pliers-in-corridor-and-looking-at.jpg?s=612x612&w=0&k=20&c=stdWozouV2XsrHk2xXD3C31nT90BG7ydZvcpAn1Fx7I='
    },
    {
      id: 2,
      name: 'Icona Georgiev',
      age: 40,
      email: 'muscleman@abv.com',
      phone: '098-765-4321',
      profession: 'Painter',
      photoId: 'https://paintmywalls.in/wp-content/uploads/2023/04/professional-painters-near-me-best-professional-painters-near-me-1-1024x724.jpg'
    },
  ];
  


export default function Catalog() {

  return (

    <div className="catalog">
      {items.map((item) => (
        <div key={item.id} className="catalog-item">
          <div className="left-section">
          <div className="photo-container">
              <img src={item.photoId} alt={item.name} className="photo" />
            </div>
            <h2>{item.name}</h2>
            <p className="profession">{item.profession}</p>
          </div>
          <div className="right-section">
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
