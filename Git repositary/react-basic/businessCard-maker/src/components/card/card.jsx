import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <div className={styles.info}>
        <div className={styles.container}>
          <p className={styles.title}>{title}</p>
          <h1 className={styles.name}>{name}</h1>
        </div>
        <p className={styles.message}>{message}</p>
        <p className={styles.company}>{company}</p>
        <p className={styles.email}>{email}</p>
      </div>
      <img className={styles.avatar} src={url} alt="profile" />
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
