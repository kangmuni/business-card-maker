import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), // uuid
      title: titleRef.current.value || '',
      name: nameRef.current.value || '',
      theme: themeRef.current.value,
      message: messageRef.current.value || '',
      company: companyRef.current.value || '',
      email: emailRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
        defaultValue="theme"
      >
        <option disabled>theme</option>
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.imageFileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <button className={styles.button} onClick={onSubmit}>
        <h1>+</h1>
      </button>
    </form>
  );
};

export default CardAddForm;
