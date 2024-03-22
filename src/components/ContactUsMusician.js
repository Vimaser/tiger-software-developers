import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../firebaseConfig";
import "./css/darkMode.css";
import "./css/Contact.css";
import musician from "../img/music.png";

const ContactUsMusician = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore();
    await addDoc(collection(db, "messages"), {
      name,
      email,
      phoneNumber,
      message,
      adSeen: "Musician",
      timestamp: new Date(),
    });

    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setSubmitted(true);
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  

  return (
    <div className="contact-container">
      {isExpanded && (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={toggleExpansion}
      >
        <img 
          src={musician} 
          alt="Musician" 
          style={{ 
            maxWidth: '90%',
            maxHeight: '90%',
            objectFit: 'contain',
          }} 
        />
        <button 
          onClick={toggleExpansion}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1001
          }}
        >
          Close
        </button>
      </div>
    )}
    <img 
      src={musician} 
      alt="Musician" 
      style={{ width: '100%', height: 'auto' }} 
      onClick={toggleExpansion}
    />

      <h2>Contact Us</h2>
      <h2>
      <a 
  href="mailto:tigersoftwaredevelopers@gmail.com"
  style={{ 
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'blue',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold'
  }}
>
  tigersoftwaredevelopers@gmail.com
</a>

      </h2>
      {submitted ? (
        <p>Thanks for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Message (Tell us about yourself!):</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
      <div className="contact-number">
        <p>
          Contact us directly at: <span>1-225-678-1294</span>
        </p>
      </div>
      <br/>
    </div>
  );
};

export default ContactUsMusician;
