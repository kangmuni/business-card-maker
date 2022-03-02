import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_IMAGE = '/images/default_logo.png';
const checkIcon = <FontAwesomeIcon icon={faCheck} />;

const CardEditForm = ({ FileInput, card, doneCard, updateCard }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const { title, name, theme, message, company, email, fileURL } = card;

  const url = fileURL || DEFAULT_IMAGE;
  const editForm = true;

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updateCard({ ...card, fileName: file.name, fileURL: file.url });
  };

  return (
    <form ref={formRef} className={`${styles.card} ${getStyles(theme)}`}>
      <div className={styles.info}>
        <div className={styles.firstContainer}>
          <input
            ref={titleRef}
            type="text"
            name="title"
            className={styles.title}
            value={title}
            onChange={onChange}
          ></input>
          <input
            ref={nameRef}
            type="text"
            name="name"
            className={styles.name}
            value={name}
            onChange={onChange}
          ></input>
        </div>
        <div className={styles.secondContainer}>
          <select
            ref={themeRef}
            className={styles.select}
            name="theme"
            placeholder="theme"
            defaultValue={theme}
            onChange={onChange}
          >
            <option disabled>theme</option>
            <option placeholder="light">light</option>
            <option placeholder="dark">dark</option>
            <option placeholder="colorful">colorful</option>
          </select>
          <input
            ref={messageRef}
            type="text"
            name="message"
            className={styles.message}
            value={message}
            onChange={onChange}
          ></input>
          <input
            ref={companyRef}
            type="text"
            name="company"
            className={styles.company}
            value={company}
            onChange={onChange}
          ></input>
          <input
            ref={emailRef}
            type="text"
            name="email"
            className={styles.email}
            value={email}
            onChange={onChange}
          ></input>
        </div>
      </div>
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.button}>
        <FileInput
          name={card.fileName}
          isEditForm={editForm}
          onFileChange={onFileChange}
        />
        <button
          className={`${styles.checkBtn} ${getStyles(theme)}`}
          onClick={doneCard}
        >
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
