import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <img src="./images/carpenter.png" alt="logo" className="about-us-img" />
      <p>
        Welcome to <strong class="highlight">HOME EXPERTS</strong> website, your one-stop destination for finding and advertising professional services in various fields. 
        Think of us as the modern-day Yellow Pages, designed specifically to connect experts and clients in the maintenance and service industry.
      </p>
      <p>
        Whether you are looking for a skilled plumber, an experienced electrician, a reliable cleaner, or any other type of expert, 
        you can find them here. Our platform allows users to browse through a catalog of professionals, view their details, and contact them directly.
      </p>
      <p>
        For professionals, we provide an easy and effective way to advertise your services. By creating a business card on our site, 
        you can showcase your skills, experience, and contact information, making it easy for potential clients to find and reach out to you.
      </p>
      <p>
        Join our community today and take the first step towards connecting with the best professionals or reaching more clients.
      </p>

    </div>
  );
}
