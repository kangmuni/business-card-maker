import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_IMAGE = '/images/default_logo.png';
const checkIcon = <FontAwesomeIcon icon={faCheck} />;

const CardEditForm = ({ card, doneCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <form ref={formRef} className={`${styles.card} ${getStyles(theme)}`}>
      <div className={styles.info}>
        <div className={styles.firstContainer}>
          <input
            ref={titleRef}
            type="text"
            className={styles.title}
            value={title}
          ></input>
          <input ref={nameRef} className={styles.name} value={name}></input>
        </div>
        <div className={styles.secondContainer}>
          <select
            ref={themeRef}
            className={styles.select}
            name="theme"
            placeholder="theme"
            defaultValue={theme}
          >
            <option disabled>theme</option>
            <option placeholder="light">light</option>
            <option placeholder="dark">dark</option>
            <option placeholder="colorful">colorful</option>
          </select>
          <input
            ref={messageRef}
            className={styles.message}
            value={message}
          ></input>
          <input
            ref={companyRef}
            className={styles.company}
            value={company}
          ></input>
          <input ref={emailRef} className={styles.email} value={email}></input>
        </div>
      </div>
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.button} onClick={doneCard}>
        <button className={`${styles.btn} ${getStyles(theme)}`}>
          {checkIcon}
        </button>
      </div>
    </form>
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

export default CardEditForm;
