import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <div className={styles.container}>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
    </div>
  </section>
);

export default Editor;
