import React from 'react';
import styles from './card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPen } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_IMAGE = '/images/default_logo.png';
const minusIcon = <FontAwesomeIcon icon={faMinus} />;
const penIcon = <FontAwesomeIcon icon={faPen} />;

const Card = ({ card, editCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  const onSubmit = () => {
    deleteCard(card);
  };

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
      <div className={styles.button}>
        <button
          className={`${styles.editBtn} ${getStyles(theme)}`}
          onClick={editCard}
        >
          {penIcon}
        </button>
        <button
          className={`${styles.deleteBtn} ${getStyles(theme)}`}
          onClick={onSubmit}
        >
          {minusIcon}
        </button>
      </div>
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
