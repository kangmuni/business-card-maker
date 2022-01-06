import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName } = card;
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option disabled selected>
          theme
        </option>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.imageFileInput}>
        <ImageFileInput name={fileName} />
      </div>
      <button className={styles.button}>
        <h1>+</h1>
      </button>
    </form>
  );
};

export default CardEditForm;
