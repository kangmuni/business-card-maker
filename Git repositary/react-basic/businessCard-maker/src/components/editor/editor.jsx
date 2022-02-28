import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './editor.module.css';

const Editor = ({ addCard }) => (
  <section className={styles.editor}>
    <div className={styles.container}>
      <CardAddForm onAdd={addCard} />
    </div>
  </section>
);

export default Editor;
