import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <div className={styles.container}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  </section>
);

export default Preview;
