import React from 'react';
import styles from '../styles/Card.module.css';
import image from '../assets/Drako zoom.png';

function Card({ title, description, onButtonClick }) {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <button className={styles.cardButton} onClick={onButtonClick}>Miau</button>
    </div>
  );
}

export default Card;
